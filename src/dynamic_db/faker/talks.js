const Chance = require('chance')

module.exports = function talks() {
  const chance = new Chance()
  const talks = []
  const categories = []
  for (let i = 1; i <= 5; i++) {
    categories.push({
      categoryId: i,
      categoryDs: chance.sentence(),
    })
  }

  for (let i = 1; i <= 10; i++) {
    talks.push({
      id: i, //NOTE: This property is used only to enable filtering in json-server and is not from the business.
      talkId: i,
      talkName: chance.sentence(),
      categories,  
      talkDs: chance.sentence(),
      talkDt: chance.timestamp(), //TODO refactor
      createdAt: chance.timestamp(), //TODO refactor
      updatedAt: chance.timestamp(), //TODO refactor
      createdBy: chance.first(),
      status: chance.bool(),
      imgUrl: chance.url()
    })
  }

  return talks;
}