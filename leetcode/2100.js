/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  let len = security.length
  const last = new Array(len).fill(0)
  const next = new Array(len).fill(0)

  for(let i = 1 ; i < len ;i++){
    if(security[i-1] >= security[i]){
      last[i] = last[i-1] + 1
    }
    if(security[len - i - 1] <= security[len - i]){
      next[len - i - 1] = next[len - i] + 1
    }
  }

  const res= []
  for(let i = time;i<len-time;i++){
    if(last[i]>=time && next[i]>=time){
      res.push(i)
    }
  }

  return res
};

security = [5,3,3,3,5,6,2], time = 2
console.log(goodDaysToRobBank(security,time));