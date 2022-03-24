/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const result = new Array(img.length).fill(0).map(()=>new Array(img[0].length).fill(0))
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[i].length; j++) {
            let number = 0;
            let sum = 0;
            for(let x = i - 1 ; x <= i + 1; x++){
                for(let y = j - 1 ; y <= j + 1;  y++){
                    if(x>= 0 && x<img.length && y>=0 && y <img[i].length){
                        sum += img[x][y]
                        number++      
                    }
                }
            }
            result[i][j] = Math.floor(sum/number)
        }
    }
    return result
};

img = [[100,200,100],[200,50,200],[100,200,100]]

console.log(imageSmoother(img));