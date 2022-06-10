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
};

console.log('=====dfs=====');

const dfs = (root)=>{
    if(!root){
        return
    }
    console.log(root.val);
    dfs(root.left);
    dfs(root.right);
}

dfs(root)

console.log('=====bfs=====');

const bfs = (root)=>{
  const queue = [];
  queue.push(root);
  while(queue.length > 0){
    let cur = queue.shift();
    if(cur.val){
      console.log(cur.val);
    }

    if(cur.left){
      queue.push(cur.left);
    }
    if(cur.right){
      queue.push(cur.right);
    }

  }
}

bfs(root)