/**
    * @param {string} sentence
    * @return {string}
    */
var toGoatLatin = function(sentence) {
  const arr = sentence.split(' ')
  let index = 1
  const result = arr.map(word=>{
    if(['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase())){
      word += 'ma'
    }else{
      word = word.slice(1)+ word[0] +'ma'
    }
    let count = 0;
    while(count < index){
      word += 'a'
      count++
    }
    index++
    return word
  })
  return result.join(' ')
};
