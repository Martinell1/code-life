/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0
  }
  let cur = s[0]
  const dp = [cur]
  for (let i = 1; i < s.length; i++) {
    const t = cur.indexOf(s[i])
    cur += s[i]
    if (t > -1) {
      cur = cur.slice(t + 1)
    }

    dp[i] = cur.length > dp[i - 1].length ? cur : dp[i - 1]
  }
  return dp[dp.length - 1].length
}

const s = 'pwwkew'

console.log(lengthOfLongestSubstring(s))
