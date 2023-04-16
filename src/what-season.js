const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let message = 'Unable to determine the time of year!';

  if (date === undefined) {
    return message;
  } 

  if (Object.values(date).length !== 0) {
    throw new Error([message = 'Invalid date!']);
  } 

	if(arguments.length > 0) {
    if(date instanceof Date) {

          let month = date.getMonth();
        
          if(month === 11 || month === 0 || month === 1) {
            message = 'winter';
          }
          if(month === 2 || month === 3 || month === 4) {
            message = 'spring';
          }
          if(month === 5 || month === 6 || month === 7) {
            message = 'summer';
          }
          if(month === 8 || month === 9 || month === 10) {
            message = 'autumn';
          }
    } else {
      throw new Error([message = 'Invalid date!']);
    } 
  } else {
      message = 'Unable to determine the time of year!';
  }
	
	return message;
}

module.exports = {
  getSeason
};
