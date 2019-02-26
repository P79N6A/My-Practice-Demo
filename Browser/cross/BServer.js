var http = require('http')

http.createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, {
    'Content-Type': 'application/json' 
  })
  res.write(JSON.stringify({a: 1}))
  res.end()
}).listen(3301, () => {
  console.log('port 3301 is listening')
})