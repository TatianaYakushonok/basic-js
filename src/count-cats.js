const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let matrixCat = [];
  for(let subArr of matrix){
    for(let elem of subArr){
      if(elem === '^^') {
        matrixCat.push(elem);
      }
    }
  }
  return matrixCat.length;
  
}

module.exports = {
  countCats
};
