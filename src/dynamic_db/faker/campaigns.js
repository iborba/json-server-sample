const Chance = require('chance')

module.exports = function campaigns() {
  const chance = new Chance()
  const campaigns = []

  for (let i = 1; i <= 10; i++) {
    campaigns.push({
      id: i, //NOTE: This property is used only to enable filtering in json-server and is not from the business.
      campaignId: i,
      campaignDs: chance.word(),
      beginDt: chance.timestamp(), //TODO refactor
      endDt: chance.timestamp(), //TODO refactor
      createdAt: chance.timestamp(), //TODO refactor
      updatedAt: chance.timestamp(), //TODO refactor
      createdBy: chance.first(),
      status: chance.bool()
    })
  }

  return campaigns;
}
