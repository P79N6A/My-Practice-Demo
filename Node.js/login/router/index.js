const { URL } = require('url')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
const { config } = require('../config')
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript'
}
const handle = {
  '/login': require('../controller/UserController').loginController,
  '/register': require('../controller/UserController').registerController
}

exports.route = function route (request, response) {
  let urlObj = new URL(request.url, `${config.baseUrl}:${config.port}`)
  let pathname = urlObj.pathname === '/' ? 'login.html' : urlObj.pathname
  let ext = path.extname(pathname)
  if (ext) {
    // 请求资源
    let filePath = path.join(__dirname, '../view', pathname)
    if (MIME[ext]) {
      fs.readFile(filePath, (err, data) => {
        if (err) throw err
        response.writeHead(200, {
          'Content-Type': MIME[ext]
        })
        response.end(data)
      })
    } else {
      response.writeHead(404)
      response.end()
    }
  } else {
    // 请求接口
    parseData(request, urlObj, (data) => {
      handle[pathname](response, data)
    })
  }
}

function parseData (request, urlObj, cb) {
  const method = request.method
  if (method === 'GET') {
    // .. 获取查询字符串的参数，并生成对象
    let data = {}
    urlObj.searchParams.forEach((value, name) => {
      data[name] = value
    })
    cb(data)
  } else if (method === 'POST') {
    // 避免 contentType 的值有多个
    const contentType = request.headers['content-type'].split('; ')[0]
    switch (contentType) {
      case 'application/www-form-urlencode': {
        // 查询字符串
        // 这里好像是错的 u.u
        let postData = {}
        urlObj.searchParams.forEach((value, name) => {
          postData[name] = value
        })
        cb(postData)
        break;
      }
      case 'multipart/form-data': {
        // 表单
        let form = new formidable.IncomingForm()
        form.parse(request, (err, fields, files) => {
          cb(fields)
        })
        break;
      }
      case 'application/json': {
        // json
        let postData = ''
        request.on('data', (chunk) => {
          postData += chunk
        })
        request.on('end', () => {
          cb(JSON.parse(postData))
        })
        break;
      }
      default : {
        // ...
      }
    }
  }
}