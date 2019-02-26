var arr = [1,4,3,2,-10,111]

var selectionSort = function (arr) {
  var pos = 0,
      len = arr.length
  // 外层：i 代表当前替换的位置
  // 最后一位不用换
  for (var i = 0; i < len - 1; i++) {
    pos = i
    // 内层比较
    for (var j = i; j < len; j++) {
      if (arr[pos] > arr[j]) {
        pos = j
      }
    }
    // 当需要交换的时候，就交换
    if (i !== pos) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]]
    }
  }
}

selectionSort(arr)
console.log(arr)