/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
  let x = tx;
  let y = ty;
  while(x >= sx && y >= sy){
    if(x === sx && y === sy){
      return true
    }
    if (x === sx && y > sy && (y - sy) % x === 0) return true
    if (y === sy && x > sx && (x - sx) % y === 0) return true
    x > y ? x %= y : y %= x
  }
  return false
};

sx = 3, sy = 3, tx = 12, ty = 9
console.log(reachingPoints(sx,sy,tx,ty));