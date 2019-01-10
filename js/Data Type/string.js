// 重复
console.log('Lin'.repeat(3))


// 标签模板
function test (a, b) {
  console.log(a)
  console.log(b)
  console.log(arguments)
}

var a = 1
var b = 2
test`${a}${b}2`