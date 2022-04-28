/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while(left < right){
    if(nums[left]%2!==0 && nums[right]%2===0){
      let t = nums[left];
      nums[left] = nums[right];
      nums[right] = t;
      left++;
      right--;
    }
    if(nums[left]%2===0){
      left++
    }
    if(nums[right]%2!==0){
      right--
    }
  }
  return nums
};
nums = [0,1]
console.log(sortArrayByParity(nums));