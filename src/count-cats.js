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
function countCats(array) {
  //throw new NotImplementedError('Not implemented');
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '^^') { count++ };
    }
  }
  return count;
}

module.exports = {
  countCats
};


//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for
//https://code.mu/ru/javascript/book/prime/loops/nested/
//https://translated.turbopages.org/proxy_u/en-ru.ru.c8c23067-64366119-540987bf-74722d776562/https/www.freecodecamp.org/news/nesting-for-loops-in-javascript/