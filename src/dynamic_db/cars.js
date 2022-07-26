const Chance = require('chance')

module.exports = function cars() {
  const chance = new Chance();
  const data = { cars: [] }

  for (let i = 0; i < 200; i++) {
    data.cars.push({
      id: chance.guid(),
      name: chance.name(),
      brand: chance.name(),
      year: chance.year()
    })
  }

  return data
}
