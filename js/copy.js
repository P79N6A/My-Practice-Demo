// var obj1 = {
//   a: 1
// }

// // var obj2 = Object.assign({}, obj1)
// var obj2 = {...obj1}
// obj2.a = 333
// console.log(obj1.a) // 1
// console.log(obj2.a) // 333

var obj1 = {
  first: {
    name: 'xixi'
  },
  second: undefined,
  third: function () {}
}
console.log(JSON.stringify(obj1))
var obj2 = JSON.parse(JSON.stringify(obj1))
obj2.first.name = 'Lin'
console.log(obj1.first.name) // xixi
console.log(obj2) // Lin