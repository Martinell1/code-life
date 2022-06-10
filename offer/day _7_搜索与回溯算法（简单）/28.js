/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 var isSymmetric = function(root) {
    if(!root) return true;
    const turn = (nodeLeft, nodeRight) => {
        if(!nodeLeft && !nodeRight) return true;
        if(!nodeLeft || !nodeRight) return false;
        return nodeLeft.val === nodeRight.val && turn(nodeLeft.left, nodeRight.right) && turn(nodeLeft.right, nodeRight.left);
    };
    
    return turn(root.left, root.right);
};
