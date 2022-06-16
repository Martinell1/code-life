/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1, 0, 0)
      i++
    }
  }
  arr.splice(n, (arr.length - n))
}

const arr = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(arr)
console.log(arr)
