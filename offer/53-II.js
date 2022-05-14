/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]===mid){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
    return l
};