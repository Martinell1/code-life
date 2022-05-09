/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
    const map = new Map()
    let step = 0;
    let hasUpLetter = false;
    let hasLowLetter = false;
    let hasNumber = false;
    for(let i = 0 ; i < password.length ; i++){
        const char = password[i]
        const charCode = char.charCodeAt(0);
        if(charCode>48 && charCode<57){
            hasNumber = true
        }else if(charCode > 65 && charCode<90){
            hasUpLetter = true
        }else if(charCode > 97 && charCode < 122){
            hasLowLetter = true
        }
        let cur = i+1;
        let count = 1;
        while(password[cur] === char){
            count++
            cur++
        }
        if(!map.has(char) || (map.has(char && map.get(char)<count))){
            map.set(char,count)
        }
    }
    if(!hasLowLetter){
        step++
    }
    if(!hasUpLetter){
        step++
    }
    if(!hasNumber){
        step++
    }
    
    console.log(step);
    console.log(map);

};

password = "1337C0d3"
console.log(strongPasswordChecker(password));