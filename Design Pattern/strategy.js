// 模拟类

// 不模拟类
var strategies = {
  'S': function (salary) {
    return salary * 5
  },
  'A': function (salary) {
    return salary * 4
  }
}

var calculateBonus = function (level, salary) {
  return strategies[level](salary)
}

console.log(calculateBonus('S', 10000)) // 50000