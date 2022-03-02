function validPalindrome(s){
  let i = 0 ;
  let j = s.length - 1;
  while(i<j){

    while(s[i] === s[j]){
      i++
      j--
    }

    if(s[i] !== s[j]){
      if(isPalindrome(i+1,j) || isPalindrome(i,j-1)){
        return true
      }
      return false
    }
  }


  function isPalindrome(i,j){
    while(i<j){
      if(s[i] !== s[j]){
        return false
      }
      i++
      j--
    }
    return true
  }
}



console.log(validPalindrome('abcddda'));