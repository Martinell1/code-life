/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
  const len = nums.length
  let left = 0
  let right = len - 1
  while (left < right) {
    if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
      const t = nums[left]
      nums[left] = nums[right]
      nums[right] = t
      left++
      right--
    }
    if (nums[left] % 2 === 0) {
      left++
    }
    if (nums[right] % 2 !== 0) {
      right--
    }
  }
  return nums
}
const nums = [0, 1]
console.log(sortArrayByParity(nums))
