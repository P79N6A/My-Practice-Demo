// 1. 原型继承
function Father () {
  this.name = 'father'
  this.fruit = ['apple', 'orange']
}

function Son () {
  this.age = 3
}
Son.prototype = new Father()
Son.prototype.constructor = Son

var son = new Son()
console.log(son.age) // 3
console.log(son.name) // 'father'


// 2. call 继承
function Father (x, y) {
  this.x = x
  this.y = y
}
Father.prototype.sayHi = function () {
  console.log('hi~')
}

function Son (x, y) {
  Father.call(this, x, y)
}

var son = new Son(1, 2)

console.log(son)
son.sayHi() // Uncaught TypeError: son.sayHi is not a function


// 3. 组合式继承
function Father (x, y) {
  this.x = x
  this.y = y
}
Father.prototype.sayHi = function () {
  console.log('hi~' + this.x)
}

function Son (x, y) {
  Father.call(this, x, y)
}
Son.prototype = new Father()
Son.prototype.constructor = Son

var son = new Son(1, 2)
console.log(son)
son.sayHi()


// 4. 寄生组合式继承
function Father (x, y) {
  this.x = x
  this.y = y
}
Father.prototype.sayHi = function () {
  console.log('hi~' + this.x)
}

function Son (x, y) {
  Father.call(this, x, y)
}
function create(proto) {
  function F () {}
  F.prototype = proto
  return new F()
}
Son.prototype = create(Father.prototype)
Son.prototype.constructor = Son

var son = new Son(1, 2)
console.log(son)
son.sayHi()


function Father (x, y) {
  this.x = x
  this.y = y
}
Father.prototype.sayHi = function () {
  console.log('hi~' + this.x)
}

function Son (x, y) {
  Father.call(this, x, y)
}
Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son

var son = new Son(1, 2)
console.log(son)
son.sayHi()


// 5. ES6 的继承：class
class Father {
  constructor (name) {
    this.name = name
    this.hobby = ['badminton', 'basketball']
  }

  sayHi () {
    console.log('hi~' + this.name)
  }
}
class Son extends Father {
  constructor (name) {
    super(name)
  }
}

var son = new Son('Lin')
var son2 = new Son('hong')

son.hobby.push('football')
console.log(son2.hobby)
son.sayHi()