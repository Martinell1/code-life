//立即执行函数中的this指向和闭包
var num = 10
var obj = { num: 20 }
obj.fn = (function (num) {
	this.num = num * 3 //60 this为global
	num++ //21
	return function (n) {
		console.log(this)
		this.num += n
		num++
		console.log(num)
	}
})(obj.num)

var fn = obj.fn

fn(5) //22  this为global

obj.fn(10) //23

console.log(num, obj.num) //10 30
