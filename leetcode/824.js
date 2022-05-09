/**
    * @param {string} sentence
    * @return {string}
    */
var toGoatLatin = function(sentence) {
  const arr = sentence.split(' ')
  let fix = 'maa'
  const result = arr.map(word=>{
    if(!['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase())){
      word = word.slice(1)+ word[0]
    }
    word += fix
    fix += 'a'
    return word
  })
  return result.join(' ')
};
