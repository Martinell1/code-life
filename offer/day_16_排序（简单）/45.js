/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function (nums) {
  return nums.sort((a, b) => {
    return `${a}${b}` - `${b}${a}`
  }).join('')
}

const nums = [3, 30, 34, 5, 9]
console.log(minNumber(nums))
