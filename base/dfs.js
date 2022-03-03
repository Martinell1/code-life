
//全排列
const permute = function(nums){
  const len = nums.length
  const cur = []
  const res = []
  const visited = {}
  
  function dfs(nth){
    if(nth === len){
      res.push(cur.slice())
      return
    }

    for(let i = 0; i < len ; i++){
      if(!visited[nums[i]]){
        visited[nums[i]] = 1

        cur.push(nums[i])

        dfs(nth+1)

        cur.pop()

        visited[nums[i]] = 0
      }
    }
  }

  dfs(0)

  return res
}


// console.log(permute([1,2,3]));

//不重复子集
function subsets(nums){
  const res = []

  const len = nums.length

  const subset = []
  
  dfs(0)

  function dfs(index){
    res.push(subset.slice())

    for(let i = index;i<len;i++){
      subset.push(nums[i])
      dfs(i+1)
      subset.pop()
    }
  }

  return res
}

// console.log(subsets([1,2,3]));

//剪枝
const combine = function(n,k){
  const res = []
  const subset = []
  dfs(1)

  function dfs(index){
    if(subset.length === k){
      res.push(subset.slice())
      return 
    }

    for(let i = index;i<=n;i++){
      subset.push(i)
      dfs(i+1)
      subset.pop()
    }
  }
  return res
}

console.log(combine(4,2));


