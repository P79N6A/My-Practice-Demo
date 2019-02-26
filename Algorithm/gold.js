

// 国王与金矿：有一个国家发现了5座金矿，每座金矿的黄金储量不同，需要参与挖掘的工人数也不同
// 类似背包问题咯

// 解法一：排列组合
// 每个矿都可以选择挖或者不挖，所以就有 2^n 种选择

// 解法二：简单递归
// var g = [200, 300, 350, 400, 500] // 金矿黄金量
// var p = [3, 4, 3, 5, 5] // 金矿用工量
// // n 金矿数 w 工人数
// function gold (n, w) {
//   if (n <= 0 || w <= 0) return 0

//   if (n === 1) {
//     // 工人数要大于等于金矿所需工人数，才能挖矿
//     return w >= p[0] ? g[0] : 0
//   }

//   // 工人数要大于等于金矿所需工人数，才能挖矿
//   if (w < p[n-1]) {
//     return gold(n-1, w)
//   }

//   return Math.max(gold(n-1, w), gold(n-1, w-p[n-1]) + g[n-1])
// }
// console.log(gold(5, 10))


// 解法三：缓存
// var map = {}
// var g = [200, 300, 350, 400, 500] // 金矿黄金量
// var p = [3, 4, 3, 5, 5] // 金矿用工量
// // n 金矿数 w 工人数
// function gold (n, w) {
//   if (n <= 0 || w <= 0) return 0

//   if (n === 1) {
//     return w >= p[0] ? g[0] : 0
//   }

//   var index = n + ' ' + w
//   if (map[index]) {
//     return map[index]
//   } else {
//     if (w < p[n-1]) {
//       return map[index] = gold(n-1, w)
//     }

//     return map[index] = Math.max(gold(n-1, w), gold(n-1, w-p[n-1]) + g[n-1])
//   }
// }

// console.log(gold(5, 10))


// 动态规划
var g = [200, 300, 350, 400, 500] // 金矿黄金量
var p = [3, 4, 3, 5, 5] // 金矿用工量
// n 金矿数 w 工人数
function gold (n, w) {
  var preResults = []
  var results =[]

  // 先填充初次的
  for (var i = 0; i <= w; i++) {
   preResults[i] = i >= p[0] ? g[0] : 0
  }

  for (var i = 1; i < n; i++) {
    results = []
    for (var j = 0; j <= w; j++) {
      if (j < p[i]) {
        results[j] = preResults[j]
      } else {
        results[j] = Math.max(preResults[j], preResults[j-p[i]] + g[i])
      }
    }
    preResults = results
  }
  return results[w]
}

console.log(gold(5, 10))