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
    let queue = [root]
    const result = []
    while(queue.length>0){
        let current = queue.shift()
        if(current!=null){
            result.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    return result
};