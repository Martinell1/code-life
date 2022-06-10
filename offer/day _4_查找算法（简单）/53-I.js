/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l<r && (nums[l]!==target || nums[r]!==target)){
        if(nums[l] < target){
            l++
        }else if(nums[r] > target){
            r--
        }
    }
    if(l===r && nums[l] !== target){
         return 0
    }else{
        return r-l+1
    }
    
};