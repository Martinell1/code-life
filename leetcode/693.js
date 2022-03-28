/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let pre = -1
    while(n>0){  
        let cur = n % 2;
        if(cur === pre){
            return false
        }
        pre = cur
        n = Math.floor(n / 2)
    }
    return true
};

console.log(hasAlternatingBits(10));