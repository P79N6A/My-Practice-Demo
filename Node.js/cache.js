const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  // 服务器请求url
  console.log('服务器请求的url' + req.url)
  // 设置响应头
  // res.writeHead(
  //   200,
  //   {
  //     "Content-Type": "text/html",
  //     "Cache-control": "max-age=100",
  //   }
  // )
  if (req.url === '/test.html') {
    // 读取文件
    fs.readFile('./test.html', 'utf-8', (err, data) => {
      if (err) {
        console.log(err)
      } else {
        // console.log(data)
        res.setHeader('Content-Type', 'max-age=300000')
        res.write(data)
        // 结束响应
        res.end()
        return
      }
    })
  } else if (req.url === '/1.jpg') {
    var filePath = path.join(__dirname, '/1.jpg')
    fs.stat(filePath, (err, stats) => {
      // 获取请求头中的 If-Modified-
      console.log(req.headers['if-modified-since'])

      var reqModified = req.headers['if-modified-since']
      if (reqModified == stats.mtime.toUTCString()) {
        // 返回 304
        res.writeHead(304)
        res.end()
        return
      } else {
        fs.readFile('./1.jpg', 'binary', (err, data) => {
          if (err) {}
          else {
            var lastModified = stats.mtime.toUTCString()
            res.setHeader('Last-modified', lastModified)
            res.write(data, 'binary')
            res.end()
          }
        })
      }
    })
  } else {
    res.write('<h1>hah</h1>')
    res.end()
  }
  
})

server.listen(4111, () => {
  console.log('port 4111 is listening')
})