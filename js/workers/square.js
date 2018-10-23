var worker = new SharedWorker('./shared.js')

var squareNumber = document.getElementById('first')

squareNumber.onchange = function () {
  console.log('square post to worker')
  worker.port.postMessage([squareNumber.value, squareNumber.value])
}

worker.port.onmessage = function (e) {
  console.log('square receive from worker')
  console.log('receive ' + e.data)
}