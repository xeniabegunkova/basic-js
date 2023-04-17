const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  return email.substring(email.lastIndexOf("@") +1);
}

module.exports = {
  getEmailDomain
};


//https://www.servicenow.com/community/itsm-forum/how-do-i-split-an-email-address-to-catch-all-caracteres-before/m-p/916102