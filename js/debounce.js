function ajax (args) {
  console.log('time', new Date() + ' ' + args)
}

// /**
//  * 简单版防抖
//  * 
//  * @param {function} fn 要防抖的函数
//  * @param {number} delay 延迟执行的时间
//  * @return {function} 防抖后的函数
//  */
// function debounce (fn, delay = 100) {
//   let timer
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setInterval(() => {
//       fn.apply(this, args)
//     }, delay)
//   }
// }

// var debounceAjax = debounce(ajax, 1000)
// setInterval(debounceAjax.bind(this, 'haha'), 2000)

/**
 * 
 * @param {function} fn 要防抖的函数
 * @param {number} delay 延迟执行的时间
 * @param {string} immediate 是否要立即执行
 * @return {function} 防抖后的函数
 */
function debounce (fn, delay = 100, immediate = false) {
  let timer, context, args

  // 延迟执行的函数
  const later = () => setTimeout(() => {
    // 时间到后取消对定时器的引用
    timer = null
    if (!immediate) {
      fn.apply(context, args)
    }
  }, delay)

  return function (...params) {
    // 如果木有延迟执行函数，就创建一个
    if (!timer) {
      timer = later()
      // 如果要立即执行，就执行
      // 如果是要延迟执行的，就保存 this 的引用和传的参数
      if (immediate) {
        fn.apply(this, params)
      } else {
        context = this
        args = params
      }
    } else {
      // 重新开始计时
      clearInterval(timer)
      timer = later()
    }
  }
}

var debounceAjax = debounce(ajax, 1000, true)

var btn = document.createElement('button')
btn.innerHTML = 'click'
document.getElementsByTagName('body')[0].appendChild(btn)
btn.onclick = debounceAjax
