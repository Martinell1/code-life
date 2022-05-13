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
var reversePrint = function(head) {
    let pre = null
    let cur = head
    while(cur!=null){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    let result = []
    while(pre!=null){
        result.push(pre.val)
        pre = pre.next
    }

    console.log(result);

};