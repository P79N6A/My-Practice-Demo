const wm = new WeakMap()
let obj = {
  a: 1
}
wm.set(obj, 'I\'m still loving u.')
console.log('vm', wm.get(obj))

var key = {
  b: 2
}
wm.set(key, obj)
obj = null
console.log('vm', wm.get(key))

var arr = [1,2,3,4,6] 
wm.set(arr, 1) // 可以用数组做键名

function test () {}
wm.set(test, 'hahah') // 可以用函数做键名

const _count = new WeakMap()
class A {
  constructor () {
    _count.set(this, 'haha')
  }
}
