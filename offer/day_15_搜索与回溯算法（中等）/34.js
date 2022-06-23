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
 * @param {number} target
 * @return {number[][]}
 */
const pathSum = function (root, target) {
  const result = []
  const dfs = (root, sum, path) => {
    if (!root) {
      return
    }
    if (root.val === sum && !root.left && !root.right) {
      result.push(path)
    }
    // 路径中加入当前节点的值
    path.push(root.val)
    dfs(root.left, sum - root.val, path.slice())
    dfs(root.right, sum - root.val, path.slice())
  }
  dfs(root, target, [])
  return result
}
