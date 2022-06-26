/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getLeastNumbers = function (arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k)
}
