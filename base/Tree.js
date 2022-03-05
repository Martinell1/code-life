function TreeNode(val){
  this.root = val
  this.left = this.right = null
}


const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
}

function preorder(root){
  if(!root){
    return 
  }
  console.log(root.val);
  preorder(root.left)
 
  preorder(root.right)
}

// preorder(root)
console.log('中序遍历');
function inorder(root){

  if(!root){
    return
  }

  inorder(root.left)
  console.log(root.val);
  inorder(root.right)
}

// inorder(root)

console.log('后序遍历');
function postorder(root){
  if(!root){
    return
  }

  postorder(root.left)
  postorder(root.right)
  console.log(root.val);
}

// postorder(root)

const preorderTraversal = function(root){
  const res = []
  if(!root){
    return res
  }

  const stack = []
  stack.push(root)
  while(stack.length){
    const cur = stack.pop()
    res.push(cur.val)
    if(cur.right){
      stack.push(cur.right)
    }
    if(cur.left){
      stack.push(cur.left)
    }
  }

  return res
}

// console.log(preorderTraversal(root));

const inorderTraversal = function(root){
  const res = []

  const stack = []

  let cur = root

  while(cur || stack.length){
    while(cur){
      stack.push(cur)
      cur = cur.left
    }

    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
}

// console.log(inorderTraversal(root));

const levelOrder = function(root){
  const res = []
  const queue = []
  queue.push(root)

  while(queue.length){
    const level = []
    const len = queue.length

    for(let i = 0; i < len ;i++){
      const top = queue.shift()
      level.push(top.val)
      if(top.left){
        queue.push(top.left)
      }
      if(top.right){
        queue.push(top.right)
      }
    }

    res.push(level)
  }
  return res
}

// console.log(levelOrder(root));

const invertTree = function(root){
  if(!root){
    return root
  }

  let right = invertTree(root.right)
  let left = invertTree(root.left)
  root.left = right
  root.right = left
  return root
}

console.log(invertTree(root));
