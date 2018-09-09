var binarySearch = function (array, key) {
  var i = 0
  var j = array.length - 1
  var mid = Math.floor((j+i)/2)
  while (i <= j) {
    mid = Math.floor((j+i)/2)
    if (key > array[mid]) {
      i = mid + 1
    } else if (key < array[mid]) {
      j = mid - 1
    } else {
      return mid
    }
  }
  return false
}
var arr = [1,4,8,10,22,35, 100]

console.log(binarySearch(arr, 4))