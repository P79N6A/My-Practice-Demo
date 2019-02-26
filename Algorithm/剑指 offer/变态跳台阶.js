// 解法一：排列组合
// function jumpFloorII (number) {

// }

// 解法二：递归
// 公式: F(n) = F(n-1) + F(n-2) + ... F(1) + 1
// function jumpFloorII (n) {
//   if (n === 1) return 1
//   if (n === 2) return 2

//   var sum = 1 // 这个就是公式最后的 +1
//   for (var i = 1; i < n; i++) {
//     sum += jumpFloorII(i)
//   }
//   return sum
// }
// console.log(jumpFloorII(10))


// 解法三：缓存 map
// var map = {}
// function jumpFloorII (n) {
//   if (n === 1) return 1
//   if (n === 2) return 2

//   if (map[n]) {
//     return map[n]
//   } else {
//     var sum = 1
//     for (var i = 1; i < n; i++) {
//       sum += jumpFloorII(i)
//     }
//     return sum
//   }
// }
// console.log(jumpFloorII(10))


// 解法四：动态规划
// 时间复杂度：O(n^2)
// 空间复杂度：O(n)
function jumpFloorII (n) {
  var map = {
    1: 1,
    2: 2
  }
  for (var i = 3; i <= n; i++) {
    for (var j = 1; j < i; j++) {
      if (!map[i]) map[i] = 0
      map[i] += map[j]
    }
    map[i] = map[i] + 1 // 公式的最后的 +1
  }
  return map[n]
}
console.log(jumpFloorII(10))