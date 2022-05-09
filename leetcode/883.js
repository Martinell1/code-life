/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  const len = grid.length;
  let x = 0;
  let y = 0;
  let z = 0;
  for(let i = 0 ; i < len ; i++){
    let a = 0 , b = 0;
    for(let j = 0 ; j <grid[i].length ; j++){
      grid[i][j] !== 0 ? z++ : z
      a = Math.max(a,grid[i][j])
      b = Math.max(b,grid[j][i])
    }
    x += a;
    y += b;
  }
  return x+y+z
};

grid = [[1,2],[3,4]]
console.log(projectionArea(grid));