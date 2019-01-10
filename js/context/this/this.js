// 箭头函数
// var obj = {
//   test: () => {
//     console.log(this)
//   }
// }

// obj.test()

// var x = 2
// function Test () {
//   this.x = 1
//   var a = () => {
//     console.log(this)
//     console.log(this.x)
//   }
//   a()
// }

// var o = new Test()





// 默认绑定
// function a () {
//   function b () {
//     function c () {
//       console.log(this)
//     }
//     c()
//   }
// }

// a()


// 隐式绑定
// var o = {
//   a: function () {
//     console.log(this)
//   }
// }
// o.a()


// new 绑定
// function T () {
//   this.x = 1
// }
// var t = new T()
// console.log(t.x)


// 箭头函数
var o = {
  test: () => {
    console.log(this)
  }
}

o.test()

function a () {
  var b = () => {
    console.log(this)
  }
  b()
}

a.call({
  o: 1
})


// 双冒号运算符
// var a = 100
// var obj = {
//   a: 1
// }
// function test () {
//   console.log(this.a)
// }
// var test = obj::test
// test()


// new.target
function Bar () {
  console.log(new.target)
  if (!new.target) {
    throw Error('Bar should be called with new')
  }
}
new Bar()

// class 中
class A {
  constructor () {
    console.log(new.target)
  }
}
class B extends A {
  constructor () {
    super()
    console.log(new.target)
  }
}
var b = new B()