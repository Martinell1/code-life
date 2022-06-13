/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const arr = heights.slice().sort((a, b) => {
    return a - b
  })
  let count = 0
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== arr[i]) {
      count++
    }
  }
  return count
}

const heights = [5, 1, 2, 3, 4]
console.log(heightChecker(heights))
