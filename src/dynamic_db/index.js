const analisys = require('./faker/analisys.js');
const campaigns = require('./faker/campaigns.js');
const courses = require('./faker/courses.js');
const news = require('./faker/news.js');
const products = require('./faker/products.js');
const talks = require('./faker/talks.js');

module.exports = () => ({
  analisys: analisys(),
  campaigns: campaigns(),
  courses: courses(),
  news: news(),
  products: products(),
  talks: talks()
});