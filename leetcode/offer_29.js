const insert = function (head, insertVal) {
  const node = new Node(insertVal)
  if (!head) {
    node.next = node
    return node
  }
  if (head.next === head) {
    head.next = node
    node.next = head
    return head
  }
  let curr = head; let next = head.next
  while (next !== head) {
    if (insertVal >= curr.val && insertVal <= next.val) {
      break
    }
    if (curr.val > next.val) {
      if (insertVal > curr.val || insertVal < next.val) {
        break
      }
    }
    curr = curr.next
    next = next.next
  }
  curr.next = node
  node.next = next
  return head
}
