/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    let ans = 0
    for(let left = 0, right = nums.length - 1; left < right; left++) {
        console.log(nums[right--],nums[left]);
        ans += nums[right--] - nums[left]
    }
    return ans
};
nums = [1,0,0,8,6]
console.log(minMoves2(nums));