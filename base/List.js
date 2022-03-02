function ListNode(val){
  this.val = val
  this.next = null
}

const node1 = new ListNode(1)
const node2 = node1.next = new ListNode(2)

const node3 = node1.next = new ListNode(3)
node3.next = node2

head = node1
while(head){
  if(!head.val){
    reteurn
  }
  console.log(head.val);
  head = head.next

}


// const deleteDuplicates = function(head){

//   let cur = head;
//   while(cur != null && cur.next != null){
//     if(cur.val === cur.next.val){
//       cur.next = cur.next.next
//     }else{
//       cur = cur.next
//     }
//   }

//   return head
// }
const deleteDuplicates = function(head){

  let dummy = new ListNode()
  dummy.next = head

  let cur = dummy;

  while(cur.next && cur.next.next){
    if(cur.next.val === cur.next.next.val){
      let val = cur.next.val
      while(cur.next && cur.next.val === val){
        cur.next = cur.next.next
      }
    }else{
      cur = cur.next
    }
  }

  return dummy.next
}

//快慢指针removeNthFromEnd  删除倒数第n个节点
function removeNthFromEnd(head,n){
  let dummy = new ListNode()
  dummy.next = head
  let qcur = dummy
  let scur = dummy
  let count = 0;
  while(qcur.next){
    while(count < n){
      count++
      qcur = qcur.next
    }
    qcur = qcur.next
    scur = scur.next
  }
  scur = scur.next.next
  return dummy.next
}

//反转链表
function reverseList(head){
  let pre = null
  let cur = head

  while(cur != null){
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}

//判断是否是循环链表
function hasCycle(head){
  let cur = head
  while(cur.next){
    if(cur.flag){
      return true
    }

    cur.flag = true
    cur = cur.next
  }
  return false
}
