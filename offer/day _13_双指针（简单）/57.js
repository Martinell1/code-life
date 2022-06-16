/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let i = 0
  let j = nums.length - 1
  let result = []
  while (i <= j) {
    if (nums[i] + nums[j] === target) {
      result = [nums[i], nums[j]]
      break
    } else if (nums[i] + nums[j] > target) {
      j--
    } else {
      i++
    }
  }
  return result
}

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target))
