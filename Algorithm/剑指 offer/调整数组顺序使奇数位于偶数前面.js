/*
  13. 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
    使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
    并保证奇数和奇数，偶数和偶数之间的相对位置不变
*/


function reOrderArray (array) {
  var oddArr = []
  var evenArr = []

  for (var i = 0, len = array.length; i < len; i++) {
    var value = array[i]
    value % 2 === 1 ? oddArr.push(value) : evenArr.push(value)
  }

  return [...oddArr, ...evenArr]
}
console.log(reOrderArray([1,2,3,4,5,6]))