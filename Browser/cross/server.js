var http = require('http')

http.createServer((req, res) => {
  // 获取 get 中的参数，以 map 的形式
  var param = parseParam(req.url)
  // 获取回调函数的名字
  var callback = param && param.callback
  if (callback) {
    // 返回数据拼接回调函数生成的字符串
    res.write(`${callback}(${JSON.stringify({name: 'Lin'})})`)
  }
  res.end()
}).listen(8899, () => {
  console.log('8899 is listening')
})

function parseParam (url) {
  var index = url.indexOf('?')
  if (index === -1) {
    return
  }
  var paramStr = url.slice(index + 1)
  var params = paramStr.split('&')

  var paramArr = params.map(item => item.split('='))
  var paramMap = {}
  paramArr.reduce((counter, currentValue) => {
    counter[currentValue[0]] = currentValue[1]
    return counter
  }, paramMap)

  return paramMap
}