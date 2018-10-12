var http = require('http')
var urllib = require('url')

var data = {
  data: 'hhh'
}

http.createServer((req, res) => {
  var params = urllib.parse(req.url, true)
  var callback = params.query.callback
  if (callback) {
    var str = `${callback}(${JSON.stringify(data)})`
    res.end(str)
  }
}).listen(3333, () => {
  console.log('haha')
})