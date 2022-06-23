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
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
  let curVal = -9999999
  let curLevel = 0
  const dfs = (root,level)=>{
      if(!root){
          return
      }
      let newLevel = ++level;
      dfs(root.left,newLevel)
      dfs(root.right,newLevel)
      if(newLevel > curLevel){
          
          curVal = root.val
          curLevel = newLevel
      }
  }

  dfs(root,0)

  return curVal
};