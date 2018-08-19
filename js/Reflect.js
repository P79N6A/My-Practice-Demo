let p = {
  a: 'a'
};

// let handler = {
//   set(target, key, value, receiver) {
//     console.log('')
//     Reflect.set(target, key, value)
//   },
//   defineProperty(target, key, attribute) {
//     console.log('defineProperty');
//     Reflect.defineProperty(target, key, attribute);
//   }
// };

// let obj = new Proxy(p, handler);
let obj1 = {
  c: 2222
}
Reflect.set(obj1, 'a', 3, p)
// obj1.b = 'A';
// set
// defineProperty

// function O () {
//   this.x = 1
// }
// O.prototype.y = 3
// var o = new O()
// Reflect.ownKeys(o)

function test () {
  this.a
  function test() {
    console.log("in")
  }
  test()
  console.log("out")
}

test.prototype.x = 1

// var t = new test()

var t

class A {
  constructor () {
    this._x = 1
  }
  test () {
    this.x
  }
  a () {
  }
}
A.prototype.x = 44

var a = new A()

