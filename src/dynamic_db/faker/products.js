const Chance = require('chance')

module.exports = function products() {
  const chance = new Chance()
  const products = []
  const categories = []
  const tags = []
  
  for (let i = 1; i <= 5; i++) {
    categories.push({
      categoryId: i,
      categoryDs: chance.sentence(),
    })
  }
  for (let i = 1; i <= 10; i++) {
    tags.push({
      tagId: i,
      tagDs: chance.sentence(),
    })
  }

  for (let i = 1; i <= 10; i++) {
    products.push({
      id: i, //NOTE: This property is used only to enable filtering in json-server and is not from the business.
      productId: i,
      level: chance.word(),
      productDs: chance.sentence(),
      categories,  
      tags,
      profitabilityPeriod: `${chance.integer({ min: 0, max: 360 })}M`,
      profitability: `${chance.floating({ min: 0, max: 100, fixed: 2 })}%`,
      minInvestment: chance.floating({ min: 0, max: 100, fixed: 2 }),
      cashRedemption: `D+${chance.integer({ min: 0, max: 360 })}`,
      beginDt: chance.timestamp(), //TODO refactor
      endDt: chance.timestamp(), //TODO refactor
      createdAt: chance.timestamp(), //TODO refactor
      updatedAt: chance.timestamp(), //TODO refactor
      createdBy: chance.first(),
      status: chance.bool(),
      imgUrl: chance.url()
    })
  }

  return products;
}