/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const map = new Map()
    const result = []
    nums.forEach(num=>{
        if(map.has(num)){
            result.push(num)
        }else{
            map.set(num,1)
        }
    })
    return result
};

nums = [1]
console.log(findDuplicates(nums));