// 1. 遍历，把木有的元素放到新数组里面
// var arr = [1,2,3,3,4,5,2,7]
// function unique (arr) {
//   var result = []
//   for (var i = 0, len = arr.length; i < len; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(unique(arr))

// 2. 排序后去重
var arr = [1,2,3,3,4,5,2,7]
function unique (arr) {
  var result = [arr[0]]
  for (var i = 1, len = arr.length; i < len; i++) {
    // 不等于它的前一个元素，就放入新数组中
    if (arr[i] !== arr[i-1]) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(unique(arr.sort()))

// 3. Set
var arr = [1,2,3,3,4,5,2,7]
function unique (arr) {
  return [...new Set(arr)]
}
console.log(unique(arr))