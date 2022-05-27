/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 const findClosest = function(words, word1, word2) {
    let a = -1
    let b = -1
    let min = words.length

    for(let i = 0; i < words.length; i++){
        if(words[i] === word1){
            a = i
        }else if(words[i] === word2){
            b = i
        }


        if(a != -1 && b != -1){
            min =  Math.min(Math.abs(a-b), min)
        }
    }


    return min
};

words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
console.log(findClosest((words, word1, word2)))