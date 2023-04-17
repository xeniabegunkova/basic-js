const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  /*for (j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i]>arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp;
      }
    }
  }*/


}

module.exports = {
  sortByHeight
};

//https://www.techiedelight.com/ru/sort-array-of-objects-javascript/
