/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let pre = 0; let maxAns = nums[0]
  nums.forEach((x) => {
    pre = Math.max(pre + x, x)

    maxAns = Math.max(maxAns, pre)
  })
  return maxAns
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(nums))
