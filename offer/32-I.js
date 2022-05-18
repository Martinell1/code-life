/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
    const result = []
    const dfs = (node)=>{
        if(node!=null){
            result.push(node.val)
        }
        dfs(node.left)
        dfs(node.right)
    }
    console.log(result)
    dfs(root);
    return result
};