const http = require('http')
const fs = require('fs')
const path = require('path')

// const server = http.createServer((req, res) => {
//   // 服务器请求url
//   console.log('服务器请求的url' + req.url)
//   // 设置响应头
//   // res.writeHead(
//   //   200,
//   //   {
//   //     "Content-Type": "text/html",
//   //     "Cache-control": "max-age=100",
//   //   }
//   // )
//   if (req.url === '/test.html') {
//     // 读取文件
//     fs.readFile('./test.html', 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err)
//       } else {
//         res.setHeader('Content-Type', 'max-age=300000')
//         res.write(data)
//         // 结束响应
//         res.end()
//         return
//       }
//     })
//   } else if (req.url === '/1.jpg') {
//     var filePath = path.join(__dirname, '/1.jpg')
//     fs.stat(filePath, (err, stats) => {
//       // 获取请求头中的 If-Modified-
//       console.log(req.headers['if-modified-since'])

//       var reqModified = req.headers['if-modified-since']
//       if (reqModified == stats.mtime.toUTCString()) {
//         // 返回 304
//         res.writeHead(304)
//         res.end()
//         return
//       } else {
//         fs.readFile('./1.jpg', 'binary', (err, data) => {
//           if (err) {}
//           else {
//             var lastModified = stats.mtime.toUTCString()
//             res.setHeader('Last-modified', lastModified)
//             res.write(data, 'binary')
//             res.end()
//           }
//         })
//       }
//     })
//   } else {
//     res.write('<h1>hah</h1>')
//     res.end()
//   }
  
// })

// 判断是否是图片
function isPic (str) {
  var patt = /^jpg$|^png$/
  return patt.test(str)
}

// 获取文件类型
function getFileType (ext) {
  return ext.slice(1)
}

function setRepHeader (res, filePath) {
  // 设置 content-type
  var fileType = getFileType(path.extname(filePath))
  var contentType
  if (isPic(fileType)) {
    contentType = 'image/' + fileType
  } else {
    contentType = 'text/html'
  }
  // 设置响应头
  var repHeader = {
    // 'Pragma': 'no-cache',
    // 'Cache-Control': 'no-cache',
    'Cache-Control': 'max-age=100000',
    // 'Cache-Control': 'private',
    // 'Content-Type': contentType
  }
  repHeader['Expires'] = new Date(new Date().getTime() + 1000000).toUTCString()
  repHeader['Expires'] = new Date().toUTCString()

  Object.keys(repHeader).forEach(key => {
    res.setHeader(key, repHeader[key])
  })
}



const server = http.createServer((req, res) => {
  var url = req.url
  console.log('请求的url是: ' + url)
  if (url === '/favicon.ico') {
    res.end()
    return
  }
  // 根据路由拼接文件路径
  var filePath = path.join(__dirname, url)
  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      setRepHeader(res, filePath)

      // 协商缓存
      var stat = fs.statSync(filePath)
      console.log(req.headers['if-modified-since'])
      if (stat.mtime.toUTCString() === req.headers['if-modified-since']) {
        res.writeHead(304)
        res.end()
        return
      } else {
        // 设置
        var lastModified = stat.mtime.toUTCString()
        res.setHeader('Last-Modified', lastModified)
      }

      res.write(data)
      res.end()
    }
  })
})



server.listen(4111, () => {
  console.log('port 4111 is listening')
})