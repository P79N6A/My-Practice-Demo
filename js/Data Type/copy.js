var o = {
  a: 1,
  obj: {
    name: 'lin'
  },
  get b () {
    return 'b'
  },
  [Symbol.for('s')]: 'sym',
  d: undefined,
  func () {console.log('func')}
}

var k = {k: 'k'}
k.o = o
o.k = k

// 浅拷贝
// 第一种
var obj = Object.assign({}, o)
console.log(obj)
console.log(obj.obj === o.obj)

// 第二种
var obj = {...o}
console.log(obj)
console.log(obj.obj === o.obj)

// 第三种，第一种的改进版，可以拷贝 get set 属性
var clone = (target) => Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptors(target)
)
var obj = clone(o)
console.log(obj)
console.log(obj.obj === o.obj)


var o2 = Object.create(o)
o2.c = 'c'
console.log(Object.assign({}, o2)) // { c: 'c' }
// 拷贝对象、及其原型上的属性
// 第一种
var obj = Object.assign({}, o2, Object.getPrototypeOf(o2))
console.log(obj) // { c: 'c', a: 1, obj: { name: 'lin' }, b: 'b' }

// 第二种
var obj = {
  ...o2,
  __proto__: Object.getPrototypeOf(o2)
}
for (var key in obj) {
  console.log(obj[key])
}

// 第三种
var obj = Object.create(
  Object.getPrototypeOf(o2),
  Object.getOwnPropertyDescriptors(o2)
)
for (var key in obj) {
  console.log(obj[key])
}


// 深拷贝
var obj = JSON.parse(JSON.stringify(obj))
console.log(obj)
console.log(obj.obj === o.obj)


// 对象循环引用
var a = {
  name: 'lin',
  m: undefined,
  [Symbol.for('lin')]: 'hhh',
  get n () {
    return 'n'
  }
}
var b = {
  t: 'test'
}
a.c = b
b.c = a
// console.log(JSON.parse(JSON.stringify(a)))


// MessageChannel
function structuralClone(obj) {
  return new Promise(resolve => {
    const {port1, port2} = new MessageChannel();
    port2.onmessage = ev => resolve(ev.data);
    port1.postMessage(obj);
  });
}

// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
async function t () {
  const clone = await structuralClone(a)
  console.log(clone)
}
t()