/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	const map = new Map()
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], -1)
		} else {
			map.set(s[i], i)
		}
	}
	for (const item of map) {
		if (item[1] !== -1) {
			return item[0]
		}
	}
	return " "
}

const s = "leetcode"
console.log(firstUniqChar(s))
