const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const k = 0.693 / HALF_LIFE_PERIOD

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  if ((typeof sampleActivity !== 'string') || (isNaN(sampleActivity))) {
    return false
  }
  else {
    const year = - Math.log( sampleActivity / MODERN_ACTIVITY) / k;
    //return Math.ceil(year)
    return ((Math.ceil(year) !== Infinity) && (Math.ceil(year) > 0)) ? Math.ceil(year) : false; //согласно автотестам число не может быть бесконечным и отрицательным
    //делаем конструкцию, где округленное вверх число будет отображаться, только при условии двух пунктов
  }
}

module.exports = {
  dateSample
};


//https://gamer005.livejournal.com/54491.html?utm_source=3userpost - инфа о задаче
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil - округление вверх