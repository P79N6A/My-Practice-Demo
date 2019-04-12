function start (response, data) {
  // 如果是异步操作，把它放到函数里面就可以了
  console.log('start')
  console.log(data)
  response.writeHead(200)
  response.end()
}

function upload () {
  console.log('upload')
}

exports.start = start
exports.upload = upload