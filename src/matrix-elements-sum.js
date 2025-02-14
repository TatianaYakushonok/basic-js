const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const columnMatrix = matrix[0].length;
  let count = 0;

  for(let i = 0; i < columnMatrix; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(j == 0) {
        count += matrix[j][i];
      } else if( matrix[j-1][i] !== 0) {
        count += matrix[j][i];
      }
    }
  }
  
  return count;
}

module.exports = {
  getMatrixElementsSum
};
