/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = []
  this.min_stack = [Infinity]
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  this.min_stack.push(Math.min(x, this.min_stack[this.min_stack.length - 1]))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.min_stack.pop()
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.min_stack[this.min_stack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
