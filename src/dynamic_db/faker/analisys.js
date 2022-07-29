const Chance = require('chance')

module.exports = () => {
  const chance = new Chance()
  const analisys = []

  for (let i = 1; i <= 10; i++) {
    analisys.push({
      id: i, //NOTE: This property is used only to enable filtering in json-server and is not from the business.
      analisysId: i,
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

  return analisys;
}
