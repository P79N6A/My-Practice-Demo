var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    var content = fs.readFileSync(path.join(__dirname, 'index.html'))
    res.setHeader('connection', 'keep-alive')
    res.setHeader('content-type', 'text/html')
    res.setHeader('Cache-Control', 'max-age=1000000')
    res.writeHead(200)
    res.write(content)
    res.end()
  } else if (req.url === '/1.jpg') {
    var image = fs.readFileSync(path.join(__dirname, '1.jpg'))
    res.setHeader('Content-Type', 'image/jpg')
    res.setHeader('Cache-Control', 'max-age=1000000')
    res.writeHead(200)
    res.write(image, 'binary')
    res.end()
  } else {
    res.setHeader('Cache-Control', 'max-age=1000000')
    res.writeHead(200)
    res.end()
  }
})

server.listen(9000, function () {
  console.log('开启服务器，端口是 9000')
})
