/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    for(let i = 1 ; i < numbers.length; i++){
        if(numbers[i] < numbers[i-1]){
            return numbers[i]
        }
    }
    return numbers[0]
};

numbers = [3,4,5,1,2]
console.log(minArray(numbers));