// 私有变量、方法
// 1. 用 _ 命名
class A {
  constructor (name) {
    this._name = name
  }
}
var a = new A('Lin')
console.log(a._name)
a._name = 'haha'
console.log(a._name)

// 2. 用 symbol 的唯一性
// 打印的时候会看到的，不过无法直接访问到
var _name = Symbol('name')
var _sayHi = Symbol('sayHi')
class B {
  constructor (name) {
    this[_name] = name
  }
  getName () {
    return this[_name]
  }
  sayHello () {
    this[_sayHi]()
  }
  // 私有方法
  [_sayHi] () {
    console.log('hi')
  }
}
var b = new B('Lin')
console.log(b)
console.log(b.getName())
b.sayHello()

// 3. WeakMap
var _name = new WeakMap()
class C {
  constructor (name) {
    _name.set(this, name)
  }
  getName () {
    return _name.get(this)
  }
}
var c = new C('Lin')
console.log(c)
console.log(c.getName())