/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const deleteNode = function (head, val) {
  if (head.val === val) {
    return head.next
  }
  let cur = head
  // eslint-disable-next-line no-undef
  let pre = new ListNode(null)
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next

      cur = pre
    } else {
      pre = cur
      cur = cur.next
    }
  }
  return head
}
