class Foo {
  constructor () {
    return {o: 1}
  }
  sayHi () {
    console.log('hi')
  }

  // 静态方法
  static bye () {
    console.log('bye')
  }
  static get a () {
    return 'a'
  }

  get b () {
    return 'b'
  }
}
Foo.staticProp = 100

console.log(Foo.prototype.constructor === Foo)

var foo = new Foo()
console.log(foo)

// 静态方法
Foo.bye()
console.log(Foo.staticProp)


// 继承
class Bar extends Foo {}
var bar = new Bar()
Bar.bye()
console.log(Bar.staticProp)
console.log(Bar.a)


// 继承
class A {} 
class B extends A {
  constructor () {
    super()
  }
}
var b = new B()
console.log(Object.getPrototypeOf(B) === A)

// super 属性
class C {
  constructor () {
    this.x = 123
  }
  sayHi () {
    console.log('hi')
  }
  static haha () {
    console.log('haha')
  }
}
class D extends C {
  constructor () {
    super()
  }
  say () {
    super.sayHi()
    console.log(super.x)
  }
  static ha () {
    super.haha()
  }
}
var d = new D()
d.say()
D.ha()


// 继承的实现
class A {}
class B extends A {}

B.prototype.__proto__ === A.prototype // B 的实例继承 A 的实例
B.__proto__ === A // B 的静态属性继承 A 的静态属性


