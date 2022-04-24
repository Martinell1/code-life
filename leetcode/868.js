/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  let str = n.toString(2)
  let pre = 0;
  let max = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === '1') {
      max = Math.max(max, i - pre);
      pre = i;
    }
  }

  return max;
};

n = 22
console.log(binaryGap(n));