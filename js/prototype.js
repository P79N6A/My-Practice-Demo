function Father () {
  this.name = 'father'
  this.fruit = ['apple', 'orange']
}

function Son () {
  this.age = 3
}
Son.prototype = new Father()

var son = new Son()
console.log(son)
console.log(son.age)
console.log(son.name)

son.__proto__.name = 'haha'
console.log(son.name)
son.fruit.push('pear')
new Son().fruit // ["apple", "orange", "pear"]

/**
 * 查看对象a是否是某个特定类A的实例
 * a instanceof A
 */
son instanceof Son // son.__proto__ == Son.prototype
son instanceof Father // son.__proto__.proto__ == Father.protype

/**
 * 查看一个对象A是否在另一个对象a的原型链上
 * A.prototype.isPrototypeOf(a)
 */
Son.prototype.isPrototypeOf(son)


// 查看区别
var o = {}
var father = Object.create(o)
var son = Object.create(father)

console.log(o.isPrototypeOf(son))
console.log(son instanceof o)
