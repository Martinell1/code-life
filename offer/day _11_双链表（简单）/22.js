/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function (head, k) {
  let p1 = head
  let p2 = head

  let count = 0
  while (count < k && p1) {
    p1 = p1.next
    count++
  }
  while (p1) {
    p1 = p1.next
    p2 = p2.next
  }

  return p2
}
