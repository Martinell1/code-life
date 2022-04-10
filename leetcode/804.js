/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const map = new Map()
  for(let i = 0 ; i < words.length ; i++){
    let index = 0;
    let str = ''
    while(index < words[i].length){
      const char = words[i].charCodeAt(index)
      str += arr[char - 97]
      index++
    }
    if(!map.has(str)){
      map.set(str,1)
    }
  }
  return map.size
};
words = ["gin", "zen", "gig", "msg"]
console.log(uniqueMorseRepresentations(words));