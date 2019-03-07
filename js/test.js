// // 对象
// // 浅拷贝
// var o = {}
// var obj = {}
// o = { obj }
// obj = {
//   a: 1,
//   b: undefined,
//   get c () {
//     return 'c'
//   },
//   d: o
//   // e: Symbol.for('e'),
//   // f: function () {
//   //   return 'f'
//   // }
// };
// o.obj = obj;

// // 1. 遍历
// (function () {
//   var newObj = {}
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = obj[key]
//     }
//   }
//   console.log(newObj)
// })();

// // // 2. Object.assign
// (function () {
//   var newObj = Object.assign({}, obj)
//   console.log(newObj)
// }());

// // 3. ...扩展运算符
// (function () {
//   var newObj = {...obj}
//   console.log(newObj)
// }());


// 深拷贝
var o = {}
var obj = {}
o = { obj }
obj = {
  // a: 1,
  // b: undefined,
  // get c () {
  //   return 'c'
  // },
  d: o
  // e: Symbol.for('e'),
  // f: function () {
  //   return 'f'
  // }
};

// 1. 深拷贝函数
function deepClone (val) {
  if (Array.isArray(val)) {
    return val.map(deepClone)
  } else if (val && typeof val == 'object') {
    var obj = {}
    for (var key in val) {
      if (val.hasOwnProperty(key)) {
        obj[key] = deepClone(val[key])
      }
    }
    return obj
  } else {
    return val
  }
}
console.log(deepClone(obj))

// 2. JSON.parse
// (function () {
//   delete obj.d
//   var newObj = JSON.parse(JSON.stringify(obj))
//   console.log(newObj)
// })();

// 3. messageChannel：浏览器的 API
// undefined、循环引用
// ;(function () {
//   var channel = new MessageChannel()
//   delete obj.e
//   channel.port1.postMessage(obj)
//   channel.port2.onmessage = function (e) {
//     console.log(e.data)
//   }
// })()

// 4. loadsh