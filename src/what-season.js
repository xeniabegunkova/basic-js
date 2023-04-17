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
  if (typeof date === 'undefined') {
    //If the date argument was not passed, the function must return the string 'Unable to determine the time of year!'.
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") { //Time of the year must be string.
    throw new Error("Invalid date!");
  }
  if (date instanceof Date) {
    try { date.getUTCFullYear(); }
    catch {
      throw new Error("Invalid date!");
    }
    const months = date.getMonth(); //возвращает месяц указанной даты по местному времени

    if (months === 2 || months === 3 || months === 4) {
      return 'spring'
    }
    if (months === 5 || months === 6 || months === 7) {
      return 'summer'
    }
    if (months === 8 || months === 9 || months === 10) {
      return 'autumn'
    }
    else {
      return 'winter'
    }
  }
  else {
    return new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
//https://learn.javascript.ru/exception
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof
//https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date