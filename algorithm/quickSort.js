var arr = [12, 7, 1, 9, 2, 100, 4, 15]

var quickSort = function (array, l, r) {
  if (l < r) {
    var pos = part(array, l, r)
  quickSort(array, l, pos-1)
  quickSort(array, pos+1, r)
  }
  
  return
}

var part = function (array, l, r) {
  tag = array[l]
  l = l + 1
  while (l < r) {
    while (array[l] < tag) {
      l++
    }
    while (array[r] > tag) {
      r--
    }
  }
}

var swap = function (array, i, j){
  [array[i], array[j]] = [array[j], array[i]]
}