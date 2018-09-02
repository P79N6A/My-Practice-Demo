var obj = {}
console.log(Object.getPrototypeOf(obj) === Object.prototype) // true

function Cat () {}
var cat = new Cat()
console.log(Object.getPrototypeOf(cat))

function A () {}
A.prototype = {name: 'Lin'}

function B () {}
B.prototype = new A()

function C () {}
C.prototype = new B()

var c = new C()
console.log(c.name)