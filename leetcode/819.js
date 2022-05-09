/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const arr = paragraph.replace(/[\.|\?|\'|\!|\,|\;]/g,' ')
                       .split(' ')
  const map = new Map()
  let max = 0;
  let result = ''
  for(let i = 0 ; i < arr.length; i++){
    arr[i] = arr[i].toLocaleLowerCase()
    if(!banned.includes(arr[i]) && arr[i] !== ''){
      if(map.has(arr[i])){
        let count = map.get(arr[i])
        count++
        if(count>max){
          result = arr[i]
          max = count
        }
        map.set(arr[i],count)
      }else{
        map.set(arr[i],1)
        if(max === 0){
          result = arr[i]
          max = 1
        }
      }
    }
  }
  return result
};
paragraph = "a, a, a, a, b,b,b,c, c"
banned = ["a"]

console.log(mostCommonWord(paragraph,banned));