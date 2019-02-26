// 10. 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
// 第一个块，竖着放的时候，后面此时还剩下 n-1 的长度，也就是说，摆放可能的种类就是 f(n-1)
// 第一个块，横着放的时候，它下面那个只有一种可能，然后此时后面还剩下 n-2 的长度，也就是说，摆放可能的种类是 f(n-2)
// 还是斐波那契数列鸭
// f(n) = f(n-1) + f(n-2)
// 边界条件：n = 0, 1, 2
// f(0) = 0 f(1) = 1 f(2) = 2

// 解法一：递归
function rectCover (n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  return rectCover(n-1) + rectCover(n-2)
}
console.log(rectCover(5))


// 解法二：缓存
var rectCover = (function () {
  var map = {
    1: 1,
    2: 2
  }
  return function (n) {
    if (n <= 0) return 0
    return map[n] ? map[n] : map[n] = rectCover(n-1) + rectCover(n-2)
  }
})()
console.log(rectCover(5))


// 解法三：动态规划
var rectCover = function (n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2
  var first = 1
  var second = 2

  for (var i = 3; i <= n; i++) {
    var temp = first + second
    first = second
    second = temp
  }
  return second
}
console.log(rectCover(10))