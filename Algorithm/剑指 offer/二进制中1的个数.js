// 11. 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

function NumberOf1 (n) {
  var count = 0
  while (n !== 0) {
    // 按位与，如果是1，说明n的最右边一位是1
    if (n & 1 === 1) {
      count++
    }
    // 用了按位操作符的操作数，都会转为32位的有符号数
    // 用的是无符号移动
    n = n >>> 1
  }
  return count
}
console.log(NumberOf1(-5))