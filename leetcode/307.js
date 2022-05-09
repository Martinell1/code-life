/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.arr = []
  let sum = 0
  for(let i = 0 ; i < nums.length ; i++){
    sum += nums[i]
    this.arr[i] = sum
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  let red = val - (this.arr[index] - (this.arr[index - 1] || 0))
  for(let i = index ; i < this.arr.length ; i++){
    this.arr[i] += red
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return (this.arr[right] || 0) - (this.arr[left-1] || 0)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

let numArray = new NumArray([-1]);
console.log(numArray.sumRange(0, 0)); // 返回 1 + 3 + 5 = 9
console.log(numArray.update(0, 1));   // nums = [1,2,5]
console.log(numArray.sumRange(0, 0)); // 返回 1 + 2 + 5 = 8
 