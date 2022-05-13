/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    const len1 = first.length
    const len2 = second.length
    if(Math.abs(len1 - len2) > 1){
        return false
    }else{
        if(len1 === len2){
            let index = 0
            let count = 0;
            while(index < len1){
                if(first[index] !== second[index]){
                    count++
                }
                index++
            }
            if(count>1){
                return false
            }else{
                return true
            }
        }else{
            if(len1 < len2){
                let t = first
                first = second
                second = t
            }
            let l1 = 0;
            let l2 = 0;
            let count = 0;
            while(l1 < len1 && l2 < len2){
                if(first[l1] !== second[l2]){
                    count++
                    l1++
                }else{
                    l1++
                    l2++
                }
            }
            if(count>1){
                return false
            }else{
                return true
            }

        }
    }
};

first = "pales"
second = "pal"

console.log(oneEditAway(first,second));