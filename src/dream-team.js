const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  //throw new NotImplementedError('Not implemented');

  let arr = new Array();
  if(!members || !Array.isArray(members)) {
    return false
  }

  for (let name of members) {
    if (typeof name === 'string') { //делаем пометку что нэйм это только строка
      name = name.trim().toUpperCase(); //показываем что выводим эл. без пробелов большими буквами
      arr.push(name[0]);
    }
  }
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
