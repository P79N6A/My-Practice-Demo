var num1 = '11999999'
var num2 = '3332221111'

function add (a, b) {
  var result = []
  var num1Len = a.length
  var num2Len = b.length
  var i = 0
  var jinwei = 0
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')
  while (i < num1Len && i < num2Len) {
    var temp = +num1[i] + +b[i] + jinwei
    jinwei = Math.floor(temp / 10)
    result.push(temp - jinwei * 10)
    i++
  }
  if (i < num1Len) {
    result.push(...num1.slice(i, num1))
  }
  if (i < num2Len) {
    result.push(...num2.slice(i, num2))
  }
  return result.reverse().join('')
}
console.log(add(num1, num2))