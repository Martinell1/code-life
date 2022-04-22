/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
  let current = 0
  let sum = 0
  let len = nums.length
  for(let i = 0 ; i < len ; i++){
    current += i * nums[i]
    sum += nums[i]
  }
  let result = current
  for (let i = len - 1; i > 0; i--) {
    current += sum - len * nums[i];
    result = Math.max(result,current);
  }
  return result
};