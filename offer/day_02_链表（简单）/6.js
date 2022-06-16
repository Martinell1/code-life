/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function (head) {
  let cur = head
  let pre = null
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  const result = []
  while (pre) {
    result.push(pre.val)
    pre = pre.next
  }
  return result
}
