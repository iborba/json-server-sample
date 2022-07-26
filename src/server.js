const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./faker/index')());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 7000;

// server.use(jsonServer.rewriter({
//   '/api/users': '/users'
// }));

server.use(jsonServer.bodyParser)
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Service running on http://localhost:/${port}`)
});
