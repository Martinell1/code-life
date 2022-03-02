function atoi(str){
  const reg = /\s*([-\+]?[0-9]*).*/
  const max = Math.pow(2,23)-1
  const min = -max - 1
  const groups = str.match(reg)
  let target = 0;
  if(groups) {
    // 尝试转化捕获到的结构
    target = +groups[1]
    if(isNaN(target)) {
      target = 0
    }
  }
  if(target > max) {
    return max
  } else if( target < min) {
      return min
  }
  // 返回转换结果
  return target
}

console.log(atoi('91283472332'));
console.log(atoi('words and 987'));
console.log(atoi('4193 with words'));