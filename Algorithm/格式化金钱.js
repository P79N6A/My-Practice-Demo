// 1.
var money = 123456789
function toThousand (num) {
  var result = []
  var count = 0
  num = num.toString().split('')
  for (var i = num.length - 1; i >= 0; i--) {
    result.unshift(num[i])
    count++
    if (count % 3 === 0 && i !== 0) {
      result.unshift(',')
    }
  }
  return result.join('')
}
console.log(toThousand(money))