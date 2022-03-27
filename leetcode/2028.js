/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const len = rolls.length + n;
  let target = len * mean - rolls.reduce((pre,cur)=>{
    return pre + cur
  },0)
  if(target < n || target > 6 *n){
    return []
  }
  let x = Math.floor(target / n)
  let ans = new Array(n).fill(x)
  for(let i = 0 ; i < target % n ;i++){
    ans[i]++
  }
  return ans
};

rolls = [1,2,3,4], mean = 6, n = 4

console.log(missingRolls(rolls,mean,n));