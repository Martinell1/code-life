/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
	let dp = [0]
	let count_one = s[0] === "1" ? 1 : 0

	for (let i = 1; i < s.length; i++) {
		if (s[i] === "1") {
			dp[i] = dp[i - 1]
			count_one++
		} else {
			dp[i] = Math.min(dp[i - 1] + 1, count_one)
		}
	}
	return dp[dp.length - 1]
}
