var jsonServer = require('json-server')
var server = jsonServer.create()

var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const port = process.env.PORT || 3091;
server.listen(port, function () {
  console.log('JSON Server is running')
})
