var mult = function () {
  var args = arguments
  var a = 1
  for (var i = 0; i < args.length; i++) {
    a *= args[i]
  }
  return a
}

console.log(mult(1,2,3)) // 6

var proxyMult = (function () {
  var cache = {}
  return function () {
    var args = Array.prototype.join.call(arguments, ',')
    console.log('args', args)
  }
})()

proxyMult(1,2,3,4)
proxyMult(2,1,3,4)