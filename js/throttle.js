// 会延迟执行
// var throttle = function (fn, delay = 500) {
//   var timer // 定时器
//   return function () {
//     var args = arguments
//     // 如果定时器还在，就放弃本次调用
//     if (timer) {
//       return
//     }
//     timer = setTimeout(() => {
//       clearTimeout(timer)
//       timer = null
//       fn.apply(this, args)
//     }, delay)
//   }
// }

// var throttle = function (fn, delay = 500) {
//   var timer // 定时器
//   var last // 记录上一次调用的时间
//   return function () {
//     var args = arguments // 记录参数
//     var now = +new Date()
//     // 还在调用冷却期，重新设置定时器
//     // 如果连续两次调用函数的话
//     // 实际上是会调用一次，然后隔断时间再调用一次
//     if (last && last + delay > now) {
//       clearTimeout(timer)
//       timer = setTimeout(() => {
//         // 更新调用时间
//         last = now
//         fn.apply(this, args)
//       }, delay)
//     } else {
//       last = now
//       fn.apply(this, args)
//     }
//   }
// }

var throttleFunc = _.throttle(function (str) {
  console.log(str)
}, 2000)

var btn = document.createElement('button')
btn.innerHTML = 'click'
document.getElementsByTagName('body')[0].appendChild(btn)
btn.onclick = throttleFunc.bind(this, 'haha')

// window.onresize = throttleFunc.bind(this, 'haha')

