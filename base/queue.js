function MyQueue(){
  this.s1 = [];
  this.s2 = [];
}

MyQueue.prototype.push = function(x){
  this.s1.push(x)
}

MyQueue.prototype.pop  = function(){
  if(this.s2.length === 0){
    while(this.s1.length){
      this.s2.push(this.s1.pop())
    }
  }
  return this.s2.pop()
} 

MyQueue.prototype.peek  = function(){
  if(this.s2.length === 0){
    while(this.s1.length){
      this.s2.push(this.s1.pop())
    }
  }
  return this.s2[this.s2.length-1]
} 

MyQueue.prototype.empty = function () {
  // 若 stack1 和 stack2 均为空，那么队列空
  return !this.s1.length && !this.s2.length;
};


let queue = new MyQueue();
queue.push(1);  
queue.push(2);
console.log(queue.peek()); // 返回 1
console.log(queue.pop()); // 返回 1
console.log(queue.empty());; // 返回 false


//滑动窗口问题
// function maxSlidingWindow (nums,k){
//   let l = 0;
//   let r = k - 1;
//   let result = []
//   while(r < nums.length){
//     const max = calMax(nums,l,r)
//     result.push(max)
//     l++
//     r++
//   }

//   return result
// }

// function calMax (nums,left,right){
//   let max = nums[left]
//   for(let i = left;i<right;i++){
//     if(nums[i]>max){
//       max = nums[i]
//     }
//   }
//   return max
// }

const maxSlidingWindow = function (nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  // 初始化结果数组
  const res = [];
  // 初始化双端队列
  const deque = [];
  // 开始遍历数组
  for (let i = 0; i < len; i++) {
    // 当队尾元素小于当前元素时
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      // 将队尾元素（索引）不断出队，直至队尾元素大于等于当前元素
      deque.pop();
    }
    // 入队当前元素索引（注意是索引）
    deque.push(i);
    // 当队头元素的索引已经被排除在滑动窗口之外时
    while (deque.length && deque[0] <= i - k) {
      // 将队头元素索引出队
      deque.shift();
    }
    // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  // 返回结果数组
  return res;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));