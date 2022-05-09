/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  let max = -9999999;
  let min = 9999999;
  if(nums.length < 2 ){
    return 0
  }
  nums.forEach(item=>{
    if(item > max){
      max = item;
    }
    if(item < min){
      min = item
    }
  })
  if(max - min  > 2 * k){
    return max - min  - 2 * k 
  }else{
    return 0;
  }
};

nums = [0,10];k = 2
console.log(smallestRangeI(nums,k));