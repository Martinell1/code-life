/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  const map = new Map();
  for(let i = 0 ; i < nums.length ; i++){
    if(!map.has(nums[i])){
      map.set(nums[i],[i])
    }else{
      const t = map.get(nums[i])
      t.push(i)
      map.set(nums[i],t)
    }
  }
  this.map = map
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const arr = this.map.get(target)
  let index = Math.floor(Math.random()*arr.length)
  return arr[index]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */