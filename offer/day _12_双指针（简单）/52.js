const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let pA = headA; let pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}
