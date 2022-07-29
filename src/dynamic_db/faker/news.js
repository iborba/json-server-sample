const Chance = require('chance')

module.exports = function news() {
  const chance = new Chance()
  const data = { news: [] }

  for (let i = 1; i <= 150; i++) {
    data.news.push({
      newsId: i,
      newsTitle: chance.sentence(),
      categories: [
       {
         categoryId: chance.integer({ min: 1, max: 99999 }),
         categoryDs: chance.word(),
       }
      ],
      newsDs: chance.sentence(),
      createdAt: chance.timestamp(), //TODO refactor
      updatedAt: chance.timestamp(), //TODO refactor
      createdBy: chance.first(),
      status: chance.bool()
    })
  }

  return data;
}