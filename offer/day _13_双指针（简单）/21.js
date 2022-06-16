/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function (nums) {
  let i = 0
  let j = nums.length - 1
  let changeL = false
  let changeR = false
  const result = []
  while (i <= j) {
    if (nums[i] % 2 !== 0) {
      result[i] = nums[i]
      i++
    } else {
      changeL = true
    }
    if (nums[j] % 2 === 0) {
      result[j] = nums[j]
      j--
    } else {
      changeR = true
    }
    if (changeL && changeR) {
      result[i] = nums[j]
      result[j] = nums[i]
      changeL = false
      changeR = false
      i++
      j--
    }
  }
  return result
}

const nums = [1, 2, 3, 4]
console.log(exchange(nums))
