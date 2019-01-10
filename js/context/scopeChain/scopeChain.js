function test (str, a) {
  // 'use strict'
  eval(str)
  console.log(a, b)
}

test('var b = 1;', 3)
console.log(b)