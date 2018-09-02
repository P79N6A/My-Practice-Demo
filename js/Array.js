// 复制数组
var arr1 = [1, 2, 3, {a: 'haha'}]
var arr2 = []
var arr3
arr3 = arr2.concat(arr1)
arr1.push(4)
arr3[3].a = 'xixi'
console.log(arr1[3]) // 'xixi'

arr3 = [...arr1]
var [...arr3] = arr1

var arr1 = [1, 2, 3, {a: 'haha'}]
var arr4 = Array.from(arr1)
arr4[0] = 100
arr1[0] // 1

//
var arr = [1,2,3]
arr.slice(1, 2) // 2

// 转换数组
console.log(Array.prototype.slice.call({length: 3})) // [empty × 3]

//
var map = new Map([[0, 'a'], [1, 'b']])
console.log(...map)

Array.of(1,2,3)

var arr = [1,2,3]
arr.find((item) => item === 3) // 3

var arr = new Array(3).fill({name: 'Lin'})
arr[0].name = 'xixi'
arr[1].name === 'xixi'// true

var arr = [1, [2, 3], 4, [5, [6, 7]]]
arr.flat()

var arr = [1,2,3]
arr instanceof Array // true

var arr = [1,2,3]
arr.__proto__ === Array.prototype

var arr = [1,2,3]
Object.prototype.toString.call(arr) === '[object Array]' // true

var a = 1
var b = 2
let [a, b] = [b, a]