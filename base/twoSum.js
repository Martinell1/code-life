function twoSum(nums,target){
  let map = new Map()
  for(let i = 0 ; i < nums.length; i++){
    let t = target - nums[i]
    if(map.has(t)){
      return [map.get(t),i]
    }else{
      map.set(nums[i],i)
    }
  }
}

nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums,target));