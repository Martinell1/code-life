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

preorder(root)
console.log('中序遍历');
function inorder(root){

  if(!root){
    return
  }

  inorder(root.left)
  console.log(root.val);
  inorder(root.right)
}

inorder(root)

console.log('后序遍历');
function postorder(root){
  if(!root){
    return
  }

  postorder(root.left)
  postorder(root.right)
  console.log(root.val);
}

postorder(root)