/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if(s.length !== goal.length){
    return false;
  }else{
    let count = 0
    while(count<s.length){
      if(s === goal){
        return true
      }
      s = s.slice(1,s.length)+s[0]
      count++
    }
    return false
  }
};

s = "gcmbf"
goal = "fgcmb"
console.log(rotateString(s,goal));