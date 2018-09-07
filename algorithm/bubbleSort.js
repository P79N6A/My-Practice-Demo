var arr = [1,4,3,2,-10,111]

/**
 * 冒泡排序
 * 时间复杂度：O(n^2)
 * @param {array} arr 待排序的数组
 */
var bubbleSort = function (arr = []) {
  var len = arr.length
  // 外层是用来算次数的
  for (var i = 0; i < len; i++) {
    // 内层才是比较的
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
}

bubbleSort(arr)
console.log(arr)