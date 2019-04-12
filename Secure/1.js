function getLestCoins (N) {
  var coins = [1, 4, 16, 64]
  N = 1024 - N
  if (N === 1024) {return 0}
  if (N <= 0 || N > 1024) { return 0}
  
  var store = {}
  count(N)
  // console.log(store)
  return store[N]

  function count (money) {
    if (money === 0) {return 0}
    if (store[money]) {return store[money]}
    var min = [], newMin = 0
    for (var i = 0, len = coins.length; i < len; i++) {
      var coin = coins[i]
      var nowMoney = money - coin
      if (nowMoney >= 0) {
        min.push(count(nowMoney) + 1)
      }
    }
    newMin = Math.min(...min)
    return store[money] = newMin
  }
}
getLestCoins(N)