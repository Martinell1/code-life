let activeEffect
const effectStack = []

function effect(fn,options={}){
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(effectFn)
        const res = fn()
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
        return res
    }
    
    effectFn.options = options
    effectFn.deps = []

    if(!options.lazy){
        effectFn()
    }else{
        return effectFn
    }
    
}

function cleanup(effectFn){
    for(let i = 0 ; i < effectFn.deps.length; i++){
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

const bucket = new WeakMap()

const data = {
    foo:1,
    bar:2
}

const obj = new Proxy(data,{
    get(target,key){
        track(target,key)
        return target[key]
    },

    set(target,key,newVal){
        target[key] = newVal
        trigger(target,key)
    }
})

function track(target,key){
    if(!activeEffect){
        return target[key]
    }
    let depsMap = bucket.get(target)
    if(!depsMap){
        bucket.set(target,(depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if(!deps){
        depsMap.set(key,(deps = new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target,key){
    const depsMap = bucket.get(target)
    if(!depsMap){
        return
    }
    const effects = depsMap.get(key)
    const effectsToRun = new Set()
    effects && effects.forEach(effectFn=>{
        if(effectFn !== activeEffect){
            effectsToRun.add(effectFn)
        }
    })
    effectsToRun.forEach(effectFn=>{
        if(effectFn.options.scheduler){
            effectFn.options.scheduler(effectFn)
        }else{
            effectFn()
        }
    })
}


const jobQueue = new Set()
const p = Promise.resolve()
let isFlushing = false
function flushJob(){
    if(isFlushing){
        return
    }
    isFlushing = true
    p.then(()=>{
        jobQueue.forEach(job=>job())
    }).finally(()=>{
        isFlushing = false
    })
}

function computed(getter){
    let value
    let dirty = true

    const effectFn = effect(getter,{
        lazy:true,
        scheduler(){
            if(!dirty){
                dirty = true
                trigger(obj,'value')
            }
        }
    })

    const obj = {
        get value(){
            if(dirty){
                value = effectFn()
                dirty = false
            }
            track(obj,'value')
            return value
        }
    }

    return obj
}


function watch(source,cb,options = {}){
    let getter
    if(typeof source === 'function'){
        getter = source
    }else{
        getter = ()=> traverse(source)
    }
    let oldValue,newValue

    let cleanup

    function onInvalidate(fn){
        cleanup = fn
    }

    const job = () => {
        newValue = effectFn()
        if(cleanup){
            cleanup()
        }
        cb(newValue,oldValue,onInvalidate)
        oldValue = newValue
    }
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

    if(options.immediate){
        job()
    }else{
        oldValue = effectFn()
    }
}

function traverse(value,seen = new Set()){
    if(typeof value !== 'object' || value ===null || seen.has(value)){
        return
    }
    seen.add(value)
    for(const k in value){
        traverse(value[k],seen)
    }

    return value
}

watch(obj,(newValue,oldValue)=>{
    console.log('数据变化了',newValue,oldValue);
},{
    immediate:true
})

obj.foo++