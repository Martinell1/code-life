/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const toBinary = (num) => {
  const stack = []
  while( num >0 ){
    let x = num % 2;
    stack.push(x)
    num = (num - x) / 2
  }
  return stack.reverse().join('')
}

const calcOne = (str) => {
  let count= 0 ;
  for(let i = 0 ; i < str.length ; i++){
    if(str[i] === '1'){
      count++
    }
  }
  return count
}

const judPrimeNum = (num) => {
  if(num<2){
    return false
  }
  for(let i = 2 ; i < num ;i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

var countPrimeSetBits = function(left, right) {
  let count = 0
  for(let i = left; i <= right;i++){
    if(judPrimeNum(calcOne(toBinary(i)))){
      count++
    }
  }
  return count
};

left = 10, right = 15
console.log(countPrimeSetBits(left,right));