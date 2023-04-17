const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour) поэтому делимм на 3600
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const moveM = { //Функция calculateHanoi возвращает объект с 2 свойствами
    turns: 0, //повороты (минимальное количество поворотов для решения головоломки)
    seconds: 0 //секунды (минимальное количество секунд для решения головоломки при заданной скорости поворота)
  }
  moveM.turns = 2 ** disksNumber - 1; //Mn = 2**n - 1
  moveM.seconds = Math.floor(moveM.turns / (turnsSpeed / 3600)); //секунды должны быть целым числом, полученным из округленного в меньшую сторону результата расчета (этаж))
  return moveM;
}


module.exports = {
  calculateHanoi
};


//https://synset.com/ai/ru/search/Towers_of_Hanoi.html