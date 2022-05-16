var findNumberIn2DArray = function(matrix, target) {
    if(!matrix.length) return false;
    let x = 0, y = 0;
    while(x < matrix.length && y < matrix[0].length){
        if(matrix[x][y] === target){
            return true;
        }else if(matrix[x][y] > target){
            x++;
        }else{
            y++;
        }
    }
    return false;
};
