/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const result = []
  let word = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i]
    }
    if (word !== '' && s[i] === ' ') {
      result.unshift(word)
      word = ''
    }
  }
  result.unshift(word)
  return result.join(' ').trim()
}

const s = '  hello world!  '

console.log(reverseWords(s))
