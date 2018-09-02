var throttle = function (fn, interval = 500) {
  var _self = fn // 保存要调用的函数的引用
  var timer // 定时器
  return function () {
    var args = arguments
    var _me = this
    // 如果定时器还在，就放弃本次调用
    if (timer) {
      return
    }
    timer = setTimeout(function () {
      clearTimeout(timer)
      timer = null
      _self.apply(_me, args)
    }, interval)
  }
}

window.onresize = throttle(function () {
  console.log(1)
})