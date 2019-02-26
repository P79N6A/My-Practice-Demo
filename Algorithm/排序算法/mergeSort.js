var arr = [-50, 12, 3, 1, 7, 9]

/**
 * 归并排序
 * 时间复杂度：O(logn)
 * @param {array} arr 待排序的数组
 * @return 排好序的数组 
 */
var mergeSort = function (arr) {
  var len = arr.length
  if (len === 1) {
    return arr
  } else {
    var mid = Math.floor(len / 2)
    var left = arr.slice(0, mid)
    var right = arr.slice(mid, len)
    return merge(mergeSort(left), mergeSort(right))
  }
}

/**
 * 用来合并两个排好序的数组的方法
 * @param {array} left 排好序的数组
 * @param {array} right 排好序的另一个数组
 * @return left right 合并后排好序的数组
 */
var merge = function (left, right) {
  var arr = [] // 排好序的数组
  var l = 0, r = 0
  var leftLen = left.length
  var rightLen = right.length
  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      arr.push(left[l++])
    } else {
      arr.push(right[r++])
    }
  }
  // left 数组已经排序完了，把 right 数组剩下的全部丢进去
  if (r < rightLen) {
    arr.push(...right.slice(r, rightLen))
  }
  if (l < leftLen) {
    arr.push(...left.slice(l, leftLen))
  }
  return arr
}

console.log(mergeSort(arr))