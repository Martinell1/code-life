/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// 先定义三个常量表示状态
const PROMISE_STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

class MyPromise {
  constructor (executor) {
    this.state = PROMISE_STATE.PENDING
    this.value = undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      setTimeout(() => {
        if (this.state !== PROMISE_STATE.PENDING) return
        this.state = PROMISE_STATE.FULFILLED
        this.value = value

        this.onFulfilledCallbacks.forEach((fn) => fn())
      })
    }

    const reject = (reason) => {
      setTimeout(() => {
        if (this.state !== PROMISE_STATE.PENDING) return
        this.state = PROMISE_STATE.REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach((fn) => fn())
      }, 0)
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then (onFulfilled, onRejected) {
    onFulfilled =
			typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
			typeof onRejected === 'function'
			  ? onRejected
			  : (reason) => {
			      throw reason
				  }

    const promise2 = new MyPromise((resolve, reject) => {
      // console.log("promise2 this", this)
      if (this.state === PROMISE_STATE.FULFILLED) {
        setTimeout(() => {
          try {
            if (typeof onFulfilled !== 'function') {
              resolve(this.value)
            } else {
              const x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            }
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else if (this.state === PROMISE_STATE.REJECTED) {
        setTimeout(() => {
          try {
            if (typeof onRejected !== 'function') {
              reject(this.value)
            } else {
              const x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            }
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else if (this.state === PROMISE_STATE.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            if (typeof onFulfilled !== 'function') {
              resolve(this.value)
            } else {
              const x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            }
          } catch (e) {
            reject(e)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            if (typeof onRejected !== 'function') {
              reject(this.reason)
            } else {
              const x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
    })

    return promise2
  }

  catch (errorCallback) {
    return this.then(null, errorCallback)
  }
}

function resolvePromise (promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError('MyPromise TypeError'))
  }

  if (x instanceof MyPromise) {
    if (x.state === PROMISE_STATE.PENDING) {
      x.then((y) => {
        resolvePromise(promise, y, resolve, reject)
      })
    } else if (x.state === PROMISE_STATE.FULFILLED) {
      resolve(x.value)
    } else if (x.state === PROMISE_STATE.REJECTED) {
      reject(x.reason)
    }
  }

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      var then = x.then
    } catch (e) {
      reject(e)
    }

    // 如果 then 是函数
    if (typeof then === 'function') {
      let called = false
      // 将 x 作为函数的作用域 this 调用之
      // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
      // 名字重名了，我直接用匿名函数了
      try {
        then.call(
          x,
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          function (y) {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量called
            if (called) return
            called = true
            resolvePromise(promise, y, resolve, reject)
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          function (r) {
            if (called) return
            called = true
            reject(r)
          }
        )
      } catch (error) {
        // 如果调用 then 方法抛出了异常 e：
        // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
        if (called) return

        // 否则以 e 为据因拒绝 promise
        reject(error)
      }
    } else {
      resolve(x)
    }
  } else {
    resolve(x)
  }
}

// 在手写的promiseXXX.js添加以下代码，其中改成自己定义promise.js名字
MyPromise.defer = MyPromise.deferred = function () {
  const result = {}
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}
module.exports = MyPromise
