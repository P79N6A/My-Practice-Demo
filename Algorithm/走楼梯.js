// 问题描述：10 个台阶，一次可以走1个或2个，有多少种走法


// 解法一：排列组合
// var count = 0
// function walk (n) {

// }

// 解法二：递归
// 时间复杂度可以利用二叉树来计算，递归的次数就是树的节点个数
// 可以看到，树的节点个数可以近似的看成是 2^n
// 因而时间复杂度：O(2^n)
// function walk (n) {
//   // 只有1个台阶，只有一种走法
//   if (n === 1) return 1
//   // 有两个台阶，有两种走法
//   if (n === 2) return 2

//   return walk(n-1) + walk(n-2)
// }
// console.log(walk(1))


// 解法三：缓存
// 在递归的基础上，缓存之前算过的结果，避免了直接递归造成的参数重复计算的问题
// 从而减少了递归次数
// 时间、空间复杂度：一共缓存了 N-2 个输出结果，所以都是 O(n)
// var map = {} // 可以考虑用闭包的，这里避免麻烦，就不用了）
// function walk (n) {
//   if (n === 1) return 1
//   if (n === 2) return 2

//   if (map[n]) {
//     return map[n]
//   } else {
//     var value = walk(n-1) + walk(n-2)
//     map[n] = value
//     return value
//   }
// }
// console.log(walk(10))


// 解法四：动态规划
// 自底向上，通过迭代的方法去推导出结果
// 自底向上就是从最开始的情况开始
// 每次迭代的时候，只需要保存前两次的状态就可以了
// 空间复杂度：O(1)
function walk (n) {
  var temp1 = 1
  var temp2 = 2
  if (n === 1) return 1
  if (n === 2) return 2

  for (var i = 3; i <= n; i++) {
    var temp = temp1 + temp2
    temp1 = temp2
    temp2 = temp
  }
  return temp2
}
console.log(walk(8))