/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = -99999999;
  for(let i = 0 ; i < accounts.length; i++){
    let sum = 0;
    for(let j = 0 ; j < accounts[i].length; j++){
      sum+=accounts[i][j]
    }
    if(sum>max){
      max = sum
    }
  }

  return max
};

accounts = [[1,5],[7,3],[3,5]]
console.log(maximumWealth(accounts));