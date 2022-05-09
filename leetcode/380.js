var RandomizedSet = function() {
  this.set = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(!this.set.has(val)){
    this.set.add(val)
    return true
  }
  return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.set.has(val)){
    this.set.delete(val)
    return true
  }
  return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let size = this.set.size
  let index = Math.floor(Math.random() * size)
  return Array.from(this.set)[index]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */