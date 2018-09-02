var cost = (function () {
  var args = []
  return function () {
    if (arguments.length === 0) {
      // 计算
      var money = 0;
      for (var i = 0; i < args.length; i++) {
        money += args[i]
      }
      return money
    } else {
      // [].push.apply(args, arguments)
      args.push(...arguments)
    }
  }
})()

cost(100)
cost(200)
cost()

//

var curring = function (fn) {
  var args = []
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      args.push(...arguments)
    }
  }
}

var cost = function () {
  var money = 0
  for (var i = 0; i < arguments.length; i++) {
    money += arguments[i]
  }
  return money
}

var cost = curring(cost)

cost(100)
cost(200)
cost()

//
Function.prototype.uncurring = function () {
  var self = this
  console.log('self', self)
  return function () {
    var obj = Array.prototype.shift.call(arguments)
    console.log('obj', obj)
    return self.apply(obj, arguments)
  }
}

var push = Array.prototype.push.uncurring()
(function () {
  push(arguments, 4)
})(1, 2, 3)