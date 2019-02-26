var price = [1, 5, 8, 9]

function cut (price, n) {
  var maxPrice = -Infinity
  for (var i = 1; i < n; i++) {
    maxPrice = Math.max(maxPrice, cut(price, n - i))
  }
}

cut(4)