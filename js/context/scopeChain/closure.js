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


// var c = 1
// function foo () {
//   var a = 1

//   function bar () {
//     var b 
//     console.log(b)
//     console.log(c)
//     b = 10
//     console.log(a)
//   }

//   return bar
// }
// var k = foo()
// k()


// 1. 定义私有属性
function person () {
  var name = 'haha'

  function getName () {
    return name
  }
  function setName (newName) {
    name = newName
  }

  return {
    getName,
    setName
  }
}

var p = person()
console.log(p.getName())
p.setName('xixi')
console.log(p.getName())

// 2. setTimeout
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  })(i)
}