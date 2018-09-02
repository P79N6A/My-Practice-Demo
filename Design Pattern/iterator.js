var compare = function (arr1, arr2) {
  // 两个都没遍历完才需要比较
  while (!arr1.isDone() && !arr2.isDone()) {
    if (arr1.getItem() !== arr2.getItem()) {
      return false
    }
    arr1.next()
    arr2.next()
  }
  return true
}

var Iterator = function (obj) {
  var current = 0
  var next = function () {
    current += 1
  }
  var isDone = function () {
    return obj.length >= current
  }
  var getItem = function () {
    return obj[current]
  }
  return {
    next,
    isDone,
    getItem
  }
}

var iteraotr1 = Iterator([1,2,3])
var iterator2 = Iterator([1,2,3])

// console.log(iteraotr1 === iterator2)
console.log(compare(iteraotr1, iterator2))