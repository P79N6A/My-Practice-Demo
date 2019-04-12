// 1. 递归
var arr = [1,2,[3,[4,5],6],[7,8]]
function flatten (arr) {
  var result = []
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
console.log(flatten(arr))

// 2. toString + split
// 如果数组元素都是数字
var arr = [1,2,[3,[4,5],6],[7,8]];
function flatten (arr) {
  return arr.toString().split(',').map(item => +item)
}
console.log(flatten(arr))

// 3. reduce
var arr = [1,2,[3,[4,5],6],[7,8]]
function flatten (arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr)
  }, [])
}
console.log(flatten(arr))

// 4. ...扩展运算符
console.log([].concat(...[1,[2,3,[4]]]));

var arr = [1,2,[3,[4,5],6],[7,8]]
function flatten (arr) {
  // 只要一检测到 arr 里面还有数组，就立刻让它从降一次维度
  // 不断循环，直至里面 arr 里面木有数组
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...value)
  }
}