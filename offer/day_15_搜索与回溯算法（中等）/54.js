const kthLargest = function (root, k) {
  if (!root) return null
  const res = []
  // 中序遍历，性质：中序遍历后得到的数组是升序的。
  const inOrder = (root) => {
    if (!root) return
    inOrder(root.left)
    res.push(root.val)
    inOrder(root.right)
  }
  inOrder(root)
  return res[res.length - k]
}
