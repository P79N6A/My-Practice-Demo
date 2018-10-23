onmessage = function (e) {
  // console.log('Message received from main thread')
  var workerResult = 'Result ' + (e.data[0] * e.data[1])
  function t () {}
  postMessage(t)

  // 关闭自身 worker
  // close()
}