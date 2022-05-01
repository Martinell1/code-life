/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const arr1 = []
  const arr2 = []

  const inorder = (node,arr) => {
    if(node){
      inorder(node.left,arr)
      arr.push(node.val)
      inorder(node.right,arr)
    }

  }

  inorder(root1,arr1)
  inorder(root2,arr2)

  let l1 = 0;
  let l2 = 0;
  const result = []

  while(l1 < arr1.length && l2 < arr2.length){
    if(arr1[l1] <= arr2[l2]){
      result.push(arr1[l1++])
    }else{
      result.push(arr2[l2++])
    }
  }
  while(l1 < arr1.length){
    result.push(arr1[l1++])
  }

  while(l2 < arr2.length){
    result.push(arr2[l2++])
  }
  return result
};