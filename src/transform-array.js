const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)) throw new Error([message = "'arr' parameter must be an instance of the Array!"]);
  let arr2 = [...arr];

  arr2.forEach((item, i) => {
  
    if (item === '--discard-next') { 
      if (arr2[i + 1]) {
        arr2.splice(i, 2, -1);
      } else {
        arr2.splice(i, 1);
      }
    } 
    if (item === '--discard-prev') {
      if(arr2[i - 1] && arr2[i - 1] != -1) {
        arr2.splice(i-1, 2);
      } else {
        arr2.splice(i, 1);
      }
    } 
    if (item === '--double-next') { 
      if (arr2[i + 1]) {
        arr2[i] = arr2[i + 1];
      } else {
        arr2.splice(i, 1);
      }
    } 
    if (item === '--double-prev') {
      if (arr2[i - 1] && arr2[i - 1] != -1) {
        arr2[i] = arr2[i - 1];
      } else {
        arr2.splice(i, 1);
      }
    } 
  });

	return arr2.filter(i => { if(i >= 0 || Object.keys(i).length > 0) return i; });
}

module.exports = {
  transform
};
