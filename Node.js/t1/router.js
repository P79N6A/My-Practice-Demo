const path = require('path')
const fs = require('fs')

let MIME = {
  '.html': 'text/html',
  '.css': 'text/css'
}

function route (pathname, handle, response, postData) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData)
  } else {
    // 获取请求资源的 MIME 类型
    const type = path.extname(pathname)
    // 把请求资源的路径改为绝对路径
    // 因为默认是 /xxx，这样的话是相对于根目录的，所以会出错
    let filePathname = path.join(__dirname, pathname)

    // 异步读取文件
    fs.readFile(filePathname, function (err, data) {
      if (err) {
        // 需要设置字符编码的，不然返回的时候会乱码
        response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8'})
        response.end('服务端发生了错误')
      }
  
      response.writeHead(200, { 'Content-Type': MIME[type] || 'text/plain' })
      response.end(data)
    })
  }
}

exports.route = route