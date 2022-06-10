/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
	const str = num.toString()
	if (num.length <= 1) return num.length

	let count = [1, 1]
	for (let i = 1; i < str.length; i++) {
		console.log(str[i])
		if (str[i - 1] == 1 || (str[i - 1] == 2 && str[i] <= 5)) {
			count = [count[1], count[0] + count[1]]
		} else count = [count[1], count[1]]
	}
	return count[1]
}

num = 12258
console.log(translateNum(num))
