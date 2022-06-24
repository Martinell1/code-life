/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function (root) {
  const queue = []
  if (root) {
    queue.push(root)
  }
  const result = []
  while (queue.length) {
    const size = queue.length
    let max = queue[0].val
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()
      if (cur.val > max) {
        max = cur.val
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    result.push(max)
  }
  return result
}
