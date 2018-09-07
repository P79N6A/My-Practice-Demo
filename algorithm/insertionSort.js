var arr = [1,4,3,2,-10,111]

var insertionSort = function (arr) {
  var len = arr.length,
      temp,
      pos
  for (i = 1; i < len; i++) {
    pos = i
    temp = arr[i]
    while (pos > 0 && arr[pos - 1] > temp) {
      arr[pos] = arr[pos - 1]
      pos--
    }
    arr[pos] = temp
  }
}

insertionSort(arr)
console.log(arr)