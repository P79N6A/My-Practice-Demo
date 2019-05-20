var isHappy = function(n) {
  let cache = {}
  while (1) {
      let total = 0
      while (n >= 1) {
        let result = n % 10
        n = parseInt(n / 10)
        total += result * result
      }
      n = total

      if (n === 1) {
        return true
      }

      // 判断数字是否重复出现（或者用 set）
      if (cache[n]) {
        return false
      } else {
        cache[n] = true
      }
  }
};

console.log(isHappy(19))