// function c () {
//   var i = 10
//   return function a () {
//     return function b () {
//       var j = 1
//       console.log(i)
//       console.log(j)
//     }
//   }
// }

// var k = c()()
// k()


var c = 1
function foo () {
  var a = 1

  function bar () {
    var b 
    console.log(b)
    console.log(c)
    b = 10
    console.log(a)
  }

  return bar
}
var k = foo()
k()