const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
  if (req.method === 'GET') {
    console.log(querystring.parse(req.url))
  }

  console.log(req.headers)
  if (req.method === 'POST') {
    req.on('data', function (data) {
      console.log(data)
      // 转为字符串
      // console.log(data.toString())
    })
  }
  
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.end(JSON.stringify({a: 1}))
}).listen(7788, () => {
  console.log('ok')
})