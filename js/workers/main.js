// delicated worker
// var worker = new Worker('./dedicate.js')

// var first = document.getElementById('first')
// var second = document.getElementById('second')

// first.onchange = function () {
//   // 发送消息给 worker
//   worker.postMessage([first.value, second.value])
//   console.log('Message posted to worker')
// }
// second.onchange = function () {
//   worker.postMessage([first.value, second.value])
//   console.log('Message posted to worker')
// }

// // 监听来自 worker 的消息
// worker.onmessage = function (e) {
//   console.log('Message received from the delicated worker')
//   console.log(e.data)

//   // 关闭 worker
//   // worker.terminate()
// }

// // 错误处理
// worker.onerror = function (m) {
//   console.log(m)
// }


// Blob
function createWorker(f) {
  var h = '(' + f.toString() +')()'
  var blob = new Blob(['(' + f.toString() +')()']);
  console.log(h)
  var url = window.URL.createObjectURL(blob);
  var worker = new Worker(url);
  return worker;
}

var pollingWorker = createWorker(function (e) {
  var cache;

  // function compare(new, old) { ... };

  setInterval(function () {
    self.postMessage('haha')
    // fetch('/my-api-endpoint').then(function (res) {
    //   var data = res.json();

    //   if (!compare(data, cache)) {
    //     cache = data;
    //     self.postMessage(data);
    //   }
    // })
  }, 1000)
});

pollingWorker.onmessage = function () {
  // render data
}

pollingWorker.postMessage('init');