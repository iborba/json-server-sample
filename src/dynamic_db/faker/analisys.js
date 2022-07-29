const Chance = require('chance')

module.exports = function analisys() {
  const chance = new Chance()
  const data = { analisys: [] }

  for (let i = 0; i < 10; i++) {
    data.analisys.push({
      analisys: chance.integer({ min: 1, max: 99999 }),
      analisysTitle: chance.sentence(),
      author: chance.name(),
      analisysDate: chance.timestamp(), //TODO refactor
      analisysDs: chance.paragraph({ sentences: 2 }),
      createdAt: chance.timestamp(), //TODO refactor
      updatedAt: chance.timestamp(), //TODO refactor
      createdBy: chance.first(),
      status: chance.bool()
    })
  }

  return data;
}