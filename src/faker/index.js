const users = require('./users.js');
const cars = require('./cars.js');

module.exports = () => ({
  users: users(),
  cars: cars()
});