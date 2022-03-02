function threeSum(nums,target){
  nums.sort((a,b)=>{
    return a-b
  })
  let result = []
  for(let i = 0 ;i < nums.length; i++){
    let j = i + 1
    let k = nums.length - 1
    while(j<k){
      if(nums[j] + nums[k] === target - nums[i]){
        result.push([nums[i],nums[j],nums[k]])
        break
      }else if(nums[j] + nums[k] < target - nums[i]){
        j++
        while(j<k && nums[j-1] === nums[j]){
          j++
        }
      }else if(nums[j] + nums[k] > target - nums[i]){
        k--
        while(j<k && nums[k] === nums[k+1]){
          k--
        }
      }
    }
  }
  return result
}

nums = [-1, 0, 1, 2, -1, -4],target = 0

console.log(threeSum(nums,target));