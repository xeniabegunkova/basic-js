const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = String(n).split(''); //n - строчка+создаем массив

  while (res.length > 1) {
    res = String(res.reduce((i, ii) => Number(i)  + Number(ii))).split('');
  }
return Number(res);
}

module.exports = {
  getSumOfDigits
};
//https://qna.habr.com/q/917343
//https://learn.javascript.ru/while-for
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce