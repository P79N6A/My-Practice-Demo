const http = require('http')

http.createServer((req, res) => {
  res.write('haha')
  res.end()
}).listen(3344, () => {
  console.log('port 3344 is listening')
})