// 先定义三个常量表示状态
const PROMISE_STATE = {
	PENDING: "pending",
	FULFILLED: "fulfilled",
	REJECTED: "rejected",
}

class MyPromise {
	constructor(executor) {
		this.state = PROMISE_STATE.PENDING
	}
}

//在手写的promiseXXX.js添加以下代码，其中改成自己定义promise.js名字
MyPromise.defer = MyPromise.deferred = function () {
	let dfd = {}
	dfd.promise = new MyPromise((resolve, reject) => {
		dfd.resolve = resolve
		dfd.reject = reject
	})
	return dfd
}
module.exports = MyPromise
