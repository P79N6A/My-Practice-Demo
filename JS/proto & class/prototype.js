Function.prototype.bind.prototype == Function.prototype.bind.__proto__

function Foo () {}
console.log(Foo.prototype.constructor === Foo)

console.log(Function.prototype === Function.__proto__)


// 继承
function Father () {
  this.name = 'father'
  this.fruits = ['apple', 'pear']
}
var father = new Father()

function Son () {
  this.name = 'son'
}
Son.prototype = father

var son = new Son()
console.log(son.name)
console.log(son.fruits)


// 区别
console.log(son instanceof Father)
console.log(father.isPrototypeOf(son))

// Object.create
var o = {}
var father = Object.create(o)
var son = Object.create(father)
console.log(father.constructor) // ƒ Object() { [native code] }
console.log(son instanceof father.constructor)
console.log(father.isPrototypeOf(son))


// 练习题
function Person () {
  this.x = 1
  this.y = 2
  this.getX = function () {
    console.log(this.x)
  }
}
Person.prototype.getX = function () {
  console.log(this.x)
}
Person.prototype.getY = function () {
  console.log(this.y)
}
var Tom = new Person()
var Jack = new Person()

console.log(Tom.constructor.constructor === Function)
console.log(Tom.constructor.getX)
console.log(Jack.getY === Person.prototype.getY)
console.log(Tom.constructor.prototype)

// 原型相关操作
function A () {}
function B () {}
B.prototype = new A()
console.log(B.prototype.constructor)
// B.prototype.constructor = B // 修改了 prototype 以后，好像是默认会修改 constructor 的，因此这句话不用写
var b = new B()
console.log(b instanceof B)
console.log(b instanceof A)

var obj = {}
var father = Object.create(obj)