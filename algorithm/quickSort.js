var arr = [12, 7, 1, 9, 2, 100, 4, 15]

function quick (array) {
  quickSort(array, 0, array.length - 1)
}

function quickSort (array, left, right) {
  if (left < right) {
    var pivotIndex = partition(array, left, right)
    quickSort(array, left, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, right)
  }
}

function partition (array, left, right) {
  // 获取基准位置
  var pivotIndex = Math.floor((left + right) / 2)
  // 基准值
  pivotValue = array[pivotIndex]
  // 把基准值和待排数组的最后一位交换
  swap(array, right, pivotIndex)
  // 从左往右遍历，把比基准值小的放在数组的前面
  var storeIndex = left
  for (var i = left, end = right; i < end; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, storeIndex)
      storeIndex++
    }
  }
  // 和边界交换基准的位置
  // 此时，基准左边比基准值小，基准右边比基准值大
  swap(array, storeIndex, right)
  // 返回此时的基准位置
  return storeIndex
}

function swap (array, i, j){
  [array[i], array[j]] = [array[j], array[i]]
}

quick(arr)
console.log(arr) // [ 1, 2, 4, 7, 9, 12, 15, 100 ]