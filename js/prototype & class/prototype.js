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