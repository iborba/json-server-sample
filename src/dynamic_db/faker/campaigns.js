const Chance = require('chance')

module.exports = function campaigns() {
  const chance = new Chance()
  const data = { campaigns: [] }

  for (let i = 0; i < 10; i++) {
    data.campaigns.push({
      campaignId: chance.integer({ min: 1, max: 99999 }),
      campaignDs: chance.word(),
      beginDt: chance.timestamp(), //TODO refactor
      endDt: chance.timestamp(), //TODO refactor
      createdAt: chance.timestamp(), //TODO refactor
      updatedAt: chance.timestamp(), //TODO refactor
      createdBy: chance.first(),
      status: chance.bool()
    })
  }

  return data;
}