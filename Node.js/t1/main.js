const http = require('http')
const { URL } = require('url')
const config = {
  port: 8765
}
const router = require('./router')
const requestHandlers = require('./requestHandlers')
const formidable = require('formidable')
const path = require('path')

let handle = {
  '/start': requestHandlers.start,
  '/upload': requestHandlers.upload
}

function start (route) {
  http.createServer(function (request, response) {
    // 解析请求的 url
    let urlObj = new URL(request.url, `http://${request.headers.host}`)
    // 获取请求的路径，如果是 /，就导向回首页
    let pathname = urlObj.pathname === '/' ? 'index.html' : urlObj.pathname

    parsePostData(request.headers['content-type'], request, response, function (postData) {
      route(pathname, handle, response, postData)
    });
  }).listen(config.port, function () {
    console.log(`port ${config.port} is listening`)
  })
}

start(router.route)

function parsePostData (contentType, request, response, route) {
  // 考虑到 content-type 可能会有多个值
  contentType = contentType && contentType.split('; ')[0]
  switch (contentType) {
    case 'multipart/form-data': {
      let form = new formidable.IncomingForm()
      // 修改文件的保存位置
      form.uploadDir = path.join(__dirname, 'upload')
      // 要求保留文件的扩展名
      form.keepExtensions = true
      form.parse(request, function (err, fileds, files) {
        if (err) {
          console.log(err)
        }
        response.end()
        route(fileds)
      })
      return
    }
    case 'application/json': {
      let postData = ''
      request.setEncoding("utf8");
      request.addListener('data', function (chunk) {
        postData += chunk
      })
      request.addListener('end', function () {
        route(JSON.parse(postData))
      })
      break;
    }
    default: {
      route()
    }
  }
}