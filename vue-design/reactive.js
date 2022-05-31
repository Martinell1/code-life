//当前的副作用函数
let activeEffect
//副作用函数栈
//当副作用函数发生嵌套时，
//栈底存储的是外层副作用函数
//栈顶存储的是内层副作用函数
const effectStack = []

//副作用函数
function effect(fn,options={}){

    const effectFn = () => {
        //清楚依赖项
        cleanup(effectFn)
        //当effectFn执行时，将其设置为当前激活的副作用函数
        activeEffect = effectFn
        //将该函数推入副作用函数栈
        effectStack.push(effectFn)
        //执行函数，返回结果
        const res = fn()
        //函数执行完毕，出栈
        effectStack.pop()
        //当前副作用函数为副作用函数栈的栈顶
        activeEffect = effectStack[effectStack.length - 1]
        return res
    }
    
    //effectFn的配置项
    effectFn.options = options
    //用于存储effectFn相关的依赖项
    effectFn.deps = []

    if(!options.lazy){
        //该副作用函数非懒，直接执行
        effectFn()
    }else{
        //返回副作用函数，让其手动调用执行
        return effectFn
    }
    
}

//清除依赖
function cleanup(effectFn){
    //遍历该副作用函数的deps
    for(let i = 0 ; i < effectFn.deps.length; i++){
        //deps是依赖集合，可能存有多个副作用函数
        const deps = effectFn.deps[i]
        //从中清除当前副作用函数
        deps.delete(effectFn)
    }
    //重置effectFn.deps数组
    effectFn.deps.length = 0
}

//桶，存储副作用函数
const bucket = new WeakMap()

const ITERATE_KEY = Symbol()

const TriggerType = {
    SET : 'SET',
    ADD : 'ADD',
    DELETE : 'DELETE'
}

//劫持数组
const arrayInstrumentations = {}
;['includes','indexOf','lastIndexOf'].forEach(method => {
    
    const originMethod = Array.prototype[method]
    arrayInstrumentations[method] = function(...args){
        let res = originMethod.apply(this,args)

        if(res === false){
            res = originMethod.apply(this.raw,args)
        }
    
        return res
    }
})

let shouldTrack = true
;['push','pop','shift','unshift','splice'].forEach(method => {
    const originMethod = Array.prototype[method]
    arrayInstrumentations[method] = function(...args){
        shouldTrack = false
        let res = originMethod.apply(this,args)
        shouldTrack = true
        return res
    }
})


//劫持集合
const mutableInstrumentations = {
    get(key){
        const target = this.raw
        const had = target.has(key)
        track(target,key)
        if(had){
            const res = target.get(key)
            return typeof res === 'object' ? reactive(res) : res
        }
    },
    set(key,value){
        const target = this.raw
        const had = target.has(key)
        const oldValue = target.get(key)
        const rawValue = value.raw || value
        target.set(key,rawValue)
        if(!had){
            trigger(target,key,TriggerType.ADD)
        }else if(oldValue !== value || (oldValue === oldValue && value ===value)){
            trigger(target,key,TriggerType.SET)
        }
    },
    add(key){
        const target = this.raw
        const hadKey = target.has(key)
        const res = target.add(key)
        if(!hadKey){
            trigger(target,key,TriggerType.ADD)
        }
        return res
    },
    delete(key){
        const target = this.raw
        const hadKey = target.has(key)
        const res = target.delete(key)
        if(hadKey){
            trigger(target,key,TriggerType.DELETE)
        }
        return res
    },
    forEach(callback,thisArg){
        const wrap = (val) => typeof val === 'object' ? reactive(val) : val
        const target = this.raw
        track(target,ITERATE_KEY)
        target.forEach((v,k)=>{
            callback.call(thisArg,wrap(v),wrap(k),this)
        })
    },
    [Symbol.iterator]:iterationMethod,
    entries:iterationMethod,
    values:valuesIterationMethod,
    keys:KeysIterationMethod,
}

function iterationMethod(){
    const target = this.raw
    const itr = target[Symbol.iterator]()

    const wrap = (val) => typeof val === 'object' && val !== null ? reactive(val) : val

    track(target,ITERATE_KEY)

    return{
        next(){
            const {value,done} = itr.next()
            return {
                value : value ? [wrap(value[0]),wrap(value[1])] : value,
                done
            }
        },
        [Symbol.iterator](){
            return this
        }
    }
}

function valuesIterationMethod(){
    const target = this.raw
    const itr = target.values()

    const wrap = (val)=> typeof val === 'object' ? reactive(val) : val

    track(target,ITERATE_KEY)

    return {
        next(){
            const {value,done} = itr.next()
            return {
                value : wrap(value),
                done
            }
        },
        [Symbol.iterator](){
            return this
        } 
    }
}

const MAP_KEY_ITERATE_KEY = Symbol()
function KeysIterationMethod(){
    const target = this.raw
    const itr = target.keys()

    const wrap = (val)=> typeof val === 'object' ? reactive(val) : val

    track(target,MAP_KEY_ITERATE_KEY)

    return {
        next(){
            const {value,done} = itr.next()
            return {
                value : wrap(value),
                done
            }
        },
        [Symbol.iterator](){
            return this
        } 
    }
}

//代理对象
function createReactive(obj, isShallow = false, isReadonly = false){
    return new Proxy(obj,{

        //捕获get操作，执行track，追溯
        get(target,key,receiver){
            if(key === 'raw'){
                return target
            }
            const targetType = Object.prototype.toString.call(target).slice(8,-1);
            switch (targetType) {
                case 'Object':
                case 'Array':
                    if(Array.isArray(target) && arrayInstrumentations.hasOwnProperty(key)){
                        return Reflect.get(arrayInstrumentations,key,receiver)
                    }
        
                    if(!isReadonly && typeof key !== 'symbol'){
                        track(target,key)
                    }
                    const res = Reflect.get(target,key,receiver)
                   
                    if(isShallow){
                        return res
                    }
                    if(typeof res === 'object' && res !== null){
                        return isReadonly ? readonly(res) : reactive(res)
                    }
                    return res
                case 'Map':
                case 'Set':
                case 'WeakMap':
                case 'WeakSet':
                    if(key === 'size'){
                        track(target,ITERATE_KEY)
                        return Reflect.get(target,key,target)
                    }
                    return mutableInstrumentations[key]
                default:
                    return target
            }

        },
    
        //捕获set操作，执行trigger，触发
        set(target,key,newVal,receiver){

            if(isReadonly){
                console.warn(`属性${key}是只读的`)
                return true
            }
            const oldVal = target[key]
            //判断当前操作的类型
            const type = Array.isArray(target) 
                            ? Number(key) < target.length ? TriggerType.SET : TriggerType.ADD
                            : Object.prototype.hasOwnProperty.call(target,key) ? TriggerType.SET : TriggerType.ADD
            const res = Reflect.set(target,key,newVal,receiver)
            if(target === receiver.raw){
                if(oldVal !== newVal && (oldVal === oldVal || newVal === newVal)){
                    trigger(target,key,type,newVal)
                }
            }

            return res
        },
    
        has(target,key){
            track(target,key)
            return Reflect.has(target,key)
        },
    
        ownKeys(target){
            track(target,Array.isArray(target) ? 'length' : ITERATE_KEY)
            return Reflect.ownKeys(target)
        },
    
        deleteProperty(target,key){
            if(isReadonly){
                console.warn(`属性${key}是只读的`)
                return true
            }
            const hadKey = Object.prototype.hasOwnProperty.call(target,key)
            const res = Reflect.deleteProperty(target,key)
    
            if(res && hadKey){
                trigger(target,key,TriggerType.DELETE)
            }
    
            return res
        }
    })
}

function track(target,key){
    //无副作用函数
    if(!activeEffect || !shouldTrack){
        return
    }
    //从桶中取出当前对象的依赖映射
    let depsMap = bucket.get(target)
    if(!depsMap){
        bucket.set(target,(depsMap = new Map()))
    }
    //从depsMap中取到当前key关联的所有副作用函数
    let deps = depsMap.get(key)
    if(!deps){
        depsMap.set(key,(deps = new Set()))
    }
    //将当前的副作用函数添加进依赖集合deps
    deps.add(activeEffect)
    //为当前副作用函数记录依赖集合
    activeEffect.deps.push(deps)
}

function trigger(target,key,type,newVal){
    //从桶中取出当前对象的依赖映射
    const depsMap = bucket.get(target)
    //该对象未被追溯
    if(!depsMap){
        return
    }

    //从depsMap中取到当前key关联的所有副作用函数
    const effects = depsMap.get(key)

    //创建一个effectsToRun去依次执行副作用函数，防止无限循环
    const effectsToRun = new Set()

    if(Array.isArray(target) && type === TriggerType.ADD){
        const lengthEffects = depsMap.get('length')
        lengthEffects && lengthEffects.forEach(effectFn=>{
            //读取和设置操作在同一个副作用函数中时，会导致无限循环
            //如何trigger要触发的函数和当前正在执行的副作用函数是同一个，则不执行
            if(effectFn !== activeEffect){
                effectsToRun.add(effectFn)
            }
        })
    }
    
    if(Array.isArray(target) && key==='length'){
        depsMap.forEach((effects,key)=>{
            if(key >= newVal){
                effects.forEach(effectFn=>{
                    effectsToRun.add(effectFn)
                })
            }
        })
    }
    //effects.forEach中直接执行effectFn()，
    //会调用cleanup进行清除副作用函数，
    //但是副作用函数的执行会导致其重新收集到effects中
    //出现无限循环
    effects && effects.forEach(effectFn=>{
        //读取和设置操作在同一个副作用函数中时，会导致无限循环
        //如何trigger要触发的函数和当前正在执行的副作用函数是同一个，则不执行
        if(effectFn !== activeEffect){
            effectsToRun.add(effectFn)
        }
    })

    if(
        type === TriggerType.ADD || 
        type === TriggerType.DELETE ||
        (
            type === TriggerType.SET &&
            Object.prototype.toString.call(target) === '[object Map]'
        )
    ){
        const iterateEffects = depsMap.get(ITERATE_KEY)
        iterateEffects && iterateEffects.forEach(effectFn=>{
            if(effectFn !== activeEffect){
                effectsToRun.add(effectFn)
            }
        })
    }

    if(
        (type === TriggerType.ADD || type === TriggerType.DELETE) &&
        Object.prototype.toString.call(target) === '[object Map]'
    ){
        const iterateEffects = depsMap.get(MAP_KEY_ITERATE_KEY)
        iterateEffects && iterateEffects.forEach(effectFn=>{
            if(effectFn !== activeEffect){
                effectsToRun.add(effectFn)
            }
        })
    }


    effectsToRun.forEach(effectFn=>{
        if(effectFn.options.scheduler){
            //当前副作用函数有调度器，按调度器方式执行
            effectFn.options.scheduler(effectFn)
        }else{
            effectFn()
        }
    })
}

const reactiveMap = new Map()

function reactive(obj){
    const existionProxy = reactiveMap.get(obj)
    if(existionProxy){
        return existionProxy
    }

    const proxy = createReactive(obj)
    reactiveMap.set(obj,proxy)
    return proxy
}

function shallowReactive(obj){
    return createReactive(obj,true)
}

function readonly(obj){
    return createReactive(obj,false,true)
}

function shallowReadonly(obj){
    return createReactive(obj,true,true)
}


//任务队列
const jobQueue = new Set()
//创建一个p添加到微任务队列
const p = Promise.resolve()
//是否正在刷新队列
let isFlushing = false
function flushJob(){
    //正在刷新队列，则不执行
    if(isFlushing){
        return
    }
    isFlushing = true
    //在微任务队列中刷新jobQueue队列
    p.then(()=>{
        jobQueue.forEach(job=>job())
    }).finally(()=>{
        //刷新结束后重置isFlushing
        isFlushing = false
    })
}

//计算属性
function computed(getter){
    //用来缓存上一次计算的值
    let value
    //脏值，需要重新计算
    let dirty = true

    //把getter作为副作用函数，创建一个懒执行的effect
    const effectFn = effect(getter,{
        //副作用函数懒执行
        lazy:true,
        //调度器，不为脏值时重新计算
        scheduler(){
            if(!dirty){
                dirty = true
                //计算属性依赖的响应式数据发生变化时，手动调用trigger触发更新
                trigger(obj,'value')
            }
        }
    })

    const obj = {
        //读取value时才执行effectFn
        get value(){
            if(dirty){
                //手动调用副作用函数，获得计算属性值
                value = effectFn()
                dirty = false
            }
            //追溯计算属性的value
            track(obj,'value')
            return value
        }
    }
    return obj
}

//监听
function watch(source,cb,options = {}){
    let getter
    if(typeof source === 'function'){
        //监听源为getter函数
        getter = source
    }else{
        //递归读取source
        getter = ()=> traverse(source)
    }
    let oldValue,newValue

    let cleanup

    
    function onInvalidate(fn){
        //将过期的回调存储到cleanup中
        cleanup = fn
    }

    //将getter作为副作用函数，开启懒执行，获得effectFn
    const effectFn = effect(
        ()=>getter(),
        {
            lazy:true,
            scheduler:()=>{
                if(options.flush === 'post'){
                    const p = Promise.resolve()
                    p.then(job)
                }else{
                    job()
                }
            }
        }
    )

    const job = () => {
        //再次执行effectFn，获得新值
        newValue = effectFn()
        //调用cb前，先调用过期回调
        if(cleanup){
            cleanup()
        }
        //执行回调函数
        cb(newValue,oldValue,onInvalidate)
        //更新
        oldValue = newValue
    }

    if(options.immediate){
        //立即执行
        //oldValue为undefined
        job()
    }else{
        //手动执行effectFn，获得旧值
        oldValue = effectFn()
    }
}

function traverse(value,seen = new Set()){
    //如果要读取的数据已经被读取过,或者是原始值，则什么都不做
    if(typeof value !== 'object' || value ===null || seen.has(value)){
        return
    }
    //将当前值添加到seen中，表示已经读取过
    seen.add(value)
    //当前值为对象，遍历其属性
    for(const k in value){
        //递归调用
        traverse(value[k],seen)
    }

    return value
}

function toRef(obj,key){
    const wrapper = {
        get value(){
            return obj[key]
        },

        set value(val){
            obj[key] = val
        }
    }

    Object.defineProperty(wrapper,'__v_isRef',{
        value:true
    })
    
    return wrapper
}

function toRefs(obj){
    const ret = {}
    for(const key in obj){
        ret[key] = toRef(obj,key)
    }

    return ret
}

function ref(val){
    const wrapper = {
        value:val
    }
    Object.defineProperty(wrapper,'__v_isRef',{
        value:true
    })

    return reactive(wrapper)
}

function proxyRefs(target){
    return new Proxy(target,{
        get(target,key,receiver){
            const value = Reflect.get(target,key,receiver)
            return value.__v_isRef ? value.value : value
        },

        set(target,key,newValue,receiver){
            const value =  target[key]
            if(value.__v_isRef){
                value.value = newValue
                return true
            }
            return Reflect.set(target,key,newValue,receiver)
        }
    })
}

const obj = reactive({ foo: 1, bar: 2 })
const newObj = proxyRefs({ ...toRefs(obj) })

console.log(newObj.foo)
console.log(newObj.bar)

newObj.foo = 100
console.log(newObj.foo)