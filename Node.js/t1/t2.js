const http = require('http')
const fs = require('fs')
const { URL } = require('url')
const path = require('path')
const port = 8888
const formidable = require('formidable')
const router = require('./router')
const requestHandlers = require('./requestHandlers')

let MIME = {
  '.html': 'text/html',
  '.css': 'text/css'
}

let handle = {
  '/start': requestHandlers.start,
  '/upload': requestHandlers.upload
}

http.createServer(function (request, response) {
  // console.log(request)
  // 解析请求的 url
  let urlObj = new URL(request.url, `http://${request.headers.host}`)
  // 获取请求的路径，如果是 /，就导向回首页
  let pathname = urlObj.pathname === '/' ? 'index.html' : urlObj.pathname
  // 获取请求资源的 MIME 类型
  const type = path.extname(pathname)
  // 把请求资源的路径改为绝对路径
  // 因为默认是 /xxx，这样的话是相对于根目录的，所以会出错
  let filePathname = path.join(__dirname, pathname)

  router.route(pathname, handle, response)

  if (!type) {
    let form = new formidable.IncomingForm()
    form.parse(request, function (err, fileds, files) {
      console.log(fileds)
      response.end()
    })
    return
  }
  // 异步读取文件
  // fs.readFile(filePathname, function (err, data) {
  //   if (err) {
  //     // 需要设置字符编码的，不然返回的时候会乱码
  //     response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8'})
  //     response.end('服务端发生了错误')
  //   }

  //   response.writeHead(200, { 'Content-Type': MIME[type] || 'text/plain' })
  //   response.end(data)
  // })
}).listen(port, function () {
  console.log(`port ${port} is listening`)
})