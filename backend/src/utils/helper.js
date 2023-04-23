const { hash } = require('bcrypt');

/**
 * encrypts password
 * @param {string} password
 * @returns encrypted password
 */
async function hashPassword(password) {
  // auto generate a salt and hash
  return hash(password, 10);
}

module.exports = {
  hashPassword
};
