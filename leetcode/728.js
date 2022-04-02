/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const canDividingNumbers = (number) => {
    let str = number + '';
    for(let i = 0 ; i < str.length ; i++){
        if(number % str[i] !== 0){
            return false
        }
    }
    return true
}

var selfDividingNumbers = function(left, right) {
    const result = []
    for(let i = left;i<= right ; i++){
        if(canDividingNumbers(i)){
            result.push(i)
        }
    }
    return result
};

left = 47, right = 85
console.log(selfDividingNumbers(left,right));