// 定义
var arr = []
var arr = new Array(3)
console.log(arr)


// 添加/删除
var arr = [1, 2, 3, 4, 5]
arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)
arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)
arr.splice(0, 1)
console.log(arr)
arr.splice(0, 0, 1.1, 1.2)
console.log(arr)


// 清空
var arr = [1,2,3,4,5]
var arr = []

var arr = [1,2,3,4,5]
arr.length = 0
console.log(arr)

var arr = [1,2,3,4,5]
arr.splice(0, arr.length)
console.log(arr)


// 遍历
var arr = [1, 2, 3, 4, 5]
// 1. for / while / do while
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// 2. for...of
for (var item of arr) {
  console.log(item)
}

// 3. forEach
/**
 * @param {function} cb 每个元素要调用的函数
    * @param {any} currentValue 当前元素
    * @param {number} index 当前元素的索引值
    * @param {array} arr 当前元素所属的数组
 * @param {any} thisValue 函数的 this，为空就传 undefined
 */
arr.forEach((item, index, arr) => {
  console.log(item)
  console.log(index)
  console.log(arr === arr)
  console.log(this)
})

// 4. map
var newArr = arr.map((item, index, arr) => {
  return item * 2
})
console.log(newArr)

// 5. every
var result = arr.every((item, index, arr) => {
  return item < 6
})
console.log(result)

// 6. some
var result = arr.some((item => item === 2))
console.log(result)

// entires
var arr1 = arr.entries()
console.log(arr1)
for (var [key, value] of arr1) {
  console.log(value)
}


// 查找
// 1. indexOf
var result = arr.indexOf(3)
console.log(result)

// 2. lastIndexOf
var result = arr.indexOf(3)
console.log(result)

// 3. find
var result = arr.find((item) => item === 3)
console.log(result)

// 4. fineIndex

// 5. includes
var result = arr.includes(3)
console.log(result)


// 排序
var array = arr.sort()
console.log(array)
console.log(array === arr)

array = arr.sort((a, b) => a - b)
console.log(array)

var arr = arr.reverse()
console.log(array)


// 过滤
var array = arr.filter((item) => item === 3)
console.log(array)


// 展开
var array = [...arr]
console.log(array)
console.log(array === arr)


// 拷贝
// 浅拷贝
var arr = [6, 7, 8, {a: 1}]
var array = [].concat(arr1)
var array = [...arr]
var [...array] = arr
var array = Array.from(arr)
var array = arr.slice()
console.log(array[3] === arr[3])

// 深拷贝
var arr = [6, 7, 8, {a: 1}]
var array = JSON.parse(JSON.stringify(arr))
array[3].a = 100
console.log(array[3])
console.log(arr[3])


// 转为数组
var arr = [6, 7, 8, {a: 1}]
var iter = arr.entries()
var obj = {
  length: 3
}
// ...扩展运算符
console.log([...iter])
// Array.from
console.log(Array.from(iter))
console.log(Array.from(obj))
// slice
console.log(Array.prototype.slice.call(obj))


// 判断数组
var arr = []
console.log(Object.prototype.toString.call(arr) === '[object Array]')

console.log(arr instanceof Array)
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.constructor === Array)
console.log(Array.isArray(arr))

// toString  valueOf
var arr = [1, 2, 3, 4, 5]
console.log(arr.toString())
console.log(arr.valueOf())

var arr = []
arr.fill(1, 0, 1)

// 
var arr = [1,2,3,4,5]
console.log(arr.copyWithin(0, 4))

// reduce
var arr = [1, 2, 3, 4, 5]
console.log(arr.reduce((accumulator, curr, index, arr) => {
  console.log(index)
  return accumulator + curr
}))
