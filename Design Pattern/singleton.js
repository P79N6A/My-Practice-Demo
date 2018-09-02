// var CreateDiv = function (html) {
//   this.html = html
//   this.init()
// }

// CreateDiv.prototype.init = function () {console.log('创建 div')}

// var ProxyCreateDiv = (function () {
//   var instance
//   return function (html) {
//     if (instance) {
//       return instance
//     }
//     return instance = new CreateDiv(html)
//   }
// })()

// var a = new ProxyCreateDiv('<span>123123</span>')
// var b = new ProxyCreateDiv('<span>333333</span>')

// console.log(a === b)


/**
 * es6 下的单例写法u.u
 */
// var instance
// class CreateDiv {
//   constructor (html) {
//     if (instance) {
//       return instance
//     }
//     this.html = html
//     return instance = this
//   }
// }

// var a = new CreateDiv('<h1>33</h1>')
// var b = new CreateDiv('<h1>44</h1>')
// console.log(a === b)

var getSingle = function (fn) {
  var result
  return function () {
    console.log('result', result)
    result = result || (result = fn.apply(this, arguments))
    // console.log(result)
    return result
  }
}

var createLogin = function () {
  // ...
  console.log('created')
  return 'x'
}

var createSingleLogin = getSingle(createLogin)

var a = createSingleLogin('hhhh')
var b = createSingleLogin('iiii')
console.log(a)
console.log(b)