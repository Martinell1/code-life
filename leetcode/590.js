/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const ans = new Array()
  dfs = function(node) {
      if(node != null) {
          for(const child of node.children)
              dfs(child)
          ans.push(node.val)
      }
  }
  dfs(root)
  return ans
};


root = [1,null,3,2,4,null,5,6]
console.log(postorder(root));