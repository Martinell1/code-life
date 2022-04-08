/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) {
      return [];
  }

  const ans = [];
  const queue = [root];

  while (queue.length) {
      const cnt = queue.length;
      const level = [];
      for (let i = 0; i < cnt; ++i) {
          const cur = queue.shift();
          level.push(cur.val);
          for (const child of cur.children) {
              queue.push(child);
          }
      }
      ans.push(level);
  }

  return ans;
};

root = 1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14

console.log(levelOrder(root));