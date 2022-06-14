function one () {
  // 立即执行函数中的this指向和闭包
  const num = 10
  const obj = { num: 20 }
  obj.fn = (function (num) {
    this.num = num * 3 // 60 this为global
    num++ // 21
    return function (n) {
      this.num += n
      num++
      console.log(num)
    }
  })(obj.num)

  const fn = obj.fn

  fn(5) // 22  this为global
  console.log(global)
  obj.fn(10) // 23

  console.log(num, obj.num) // 10 30
  console.log(global.num)
}
//
function two () {

}
const a = 0; const b = 0
function fn (a) {
  console.log(fn)
  // eslint-disable-next-line no-func-assign
  fn = function fn2 (b) {
    alert(++a + b)
  }
  console.log(fn)
  alert(a++)
}
fn(1)
fn(2)
