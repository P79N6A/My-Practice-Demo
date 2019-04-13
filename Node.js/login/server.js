const http = require('http')
const { URL } = require('url')
const path = require('path')
const router = require('./router')
const { config } = require('./config')

http.createServer((request, response) => {
  router.route(request, response)
}).listen(config.port, () => {
  console.log(`${config.port} is listening`)
})