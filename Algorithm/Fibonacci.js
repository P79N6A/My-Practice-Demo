var result = []
function Fibonacci(n) {
  if (n === 0 || n === 1) {
    return n
  }

  if (!result[n - 2]) {
    result[n - 2] = Fibonacci(n - 2)
  }
  if (!result[n - 1]) {
    result[n - 1] = Fibonacci(n - 1)
  }
  
  return result[n - 2] + result[n - 1]
}


var resultMap = {}
function Fibonacci (n) {
  if (n === 0 || n === 1) {
    return n
  }

  if (resultMap[n]) {
    return resultMap[n]
  } else {
    var value = Fibonacci(n - 1) + Fibonacci(n - 2)
    resultMap[n] = value
    return value
  }
}

console.log(Fibonacci(5))