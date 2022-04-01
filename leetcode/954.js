/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    const map = new Map()
    for(const num of arr){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    const keys = Array.from(map.keys())
    keys.sort((a,b)=>{
        return a-b
    })
    for(const key of keys){
        if(key > 0){
            if(map.get(key)>0){
                if(!map.has(key * 2) || map.get(key * 2) < map.get(key)){
                    return false
                }
                map.set(key * 2,map.get(key * 2) - map.get(key))
            }
        }else if(key === 0){
            if(map.get(key) % 2 === 1){
                return false
            }
        }else{
            if(map.get(key) > 0 && (key % 2 != 0 || !map.has(key/2) || map.get(key/2) < map.get(key))){
                return false
            }
            map.set(key/2,map.get(key/2)-map.get(key))
        }
    }
    return true
};

arr = [4,-2,2,-4]
console.log(canReorderDoubled(arr));