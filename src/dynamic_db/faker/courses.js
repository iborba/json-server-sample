const Chance = require('chance')

module.exports = function courses() {
  const chance = new Chance()
  const data = { courses: [] }

  for (let i = 1; i <= 10; i++) {
    data.courses.push({
      courseId: i,
      courseName:chance.sentence(),
      categories: [
       {
         categoryId: chance.integer({ min: 1, max: 99999 }),
         categoryDs: chance.word(),
       }
      ],
      courseDs: chance.paragraph({ sentences: 2 }),
      createdAt: chance.timestamp(), //TODO refactor
      updatedAt: chance.timestamp(), //TODO refactor
      createdBy: chance.first(),
      status: chance.bool(),
      imgUrl: chance.url()
    })
  }

  return data;
}