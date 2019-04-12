function prize (n, arr) {
  var result = []
  for (var i = 0; i < n; i++) {
    result[i] = 1
  }

  for (var i = 0; i < n-1; i++) {
    if (arr[i+1] > arr[i]) {
      result[i+1] = result[i] + 1
    }
  }
  if (arr[i] > arr[0]) {
    if (result[i] === 1) {
      result[i] = result[0] + 1
    }
  }

  return result
}

var r = prize(5, [1,2,3,3,2].sort())
console.log(r)
console.log(r.reduce((a, b) => {
  return a + b
}))


// var n = readline()
// var i = 0
// while (i < n) {
//   var num = readline()
//   var score = readline().split(' ')
//   var r = prize(num, score)
//   console.log(r.reduce((a, b) => {
//     return a + b
//   }))
//   i++
// }


