/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  const stack = []
  let f = 1
  if(num<0){
    f = -1
  }
  num = Math.abs(num)
  while(num > 0){
    stack.push(num%7)
    num = Math.floor(num/7)
  }

  return stack.reverse().join('')*f + ""
};

num = 100

console.log(convertToBase7(num));