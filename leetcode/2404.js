/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
const maxConsecutiveChar = (answerKey,k,ch)=>{
    const len = answerKey.length
    let ans = 0 
    for (let left = 0,right = 0 , sum = 0; right < len ; right++) {
        sum += answerKey.charAt(right) !== ch ? 1 : 0
        while(sum > k){
            sum -= answerKey[left++] !== ch ? 1 : 0 
        }
        ans = Math.max(ans,right - left + 1)
    }
    return ans
}

var maxConsecutiveAnswers = function(answerKey, k) {
    return Math.max(maxConsecutiveChar(answerKey,k,'T'),maxConsecutiveChar(answerKey,k,'F'))
};
answerKey = "TTFF", k = 2
console.log(maxConsecutiveAnswers(answerKey,k));