const http = require('http')

http.createServer((req, res) => {
  console.log('ya')
  res.end('hhhh')
}).listen(10002, () => {
  console.log('port is listening')
})