/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStraight = function (nums) {
  let count = 0
  let need = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++
    }
    if (nums[i] - nums[i - 1] !== 1) {
      need++
    }
  }
  return count === need
}

const nums = [0, 0, 1, 2, 5]
console.log(isStraight(nums))
