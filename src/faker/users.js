const Chance = require('chance')

module.exports = function users() {
  const chance = new Chance();
  const data = { users: [] }

  for (let i = 0; i < 1000; i++) {
    data.users.push({
      id: chance.guid(),
      name: chance.name()
    })
  }

  return data
}
