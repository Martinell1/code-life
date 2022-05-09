/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let sum = 0
  let count1 = 1;
  for(let i = 0 ; i < s.length; i++){
    const char = s.charCodeAt(i) - 97
    if(sum <= 100 && (sum + widths[char])>100){
      sum=0
      count1++
    }
    sum+=widths[char]
  }
  return [count1,sum]
};
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
s = "abcdefghijklmnopqrstuvwxyz"
console.log(numberOfLines(widths,s));