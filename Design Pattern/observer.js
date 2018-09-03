// // 售楼部
// var saleOffices = {}

// // 缓存列表，订阅后的客户的回调函数
// saleOffices.clientList = {}

// // 订阅操作
// saleOffices.listen = function (key, fn) {
//   // 如果还没订阅过该类型的信息，就给该消息创建个缓存列表
//   if (!this.clientList[key]) {
//     this.clientList[key] = []
//   }
//   this.clientList[key].push(fn)
// }

// // 发布，执行缓存列表中中的回调函数
// saleOffices.trigger = function () {
//   var key = Array.prototype.shift.call(arguments),
//       fns = this.clientList[key]
//   if (!fns || fns.length === 0) {
//     return false
//   }
//   for (var i = 0, fn; fn = fns[i++];) {
//     fn.apply(this, arguments)
//   }
//   // for (var i = 0, fn; fn = this.clientList[i++];) {
//     //   fn.apply(this, arguments)
//     // }
//     // while (this.clientList.length > 0) {
//       //   this.clientList.shift().apply(this, arguments)
//       // }
// }
    
// saleOffices.listen('squareMeter88', function (price) {
//   console.log(`小明获得房屋信息：房价=${price}`)
// })
// saleOffices.listen('squareMeter110', function (price) {
//   console.log(`小红获得房屋信息：房价=${price}`)
// })

// saleOffices.trigger('squareMeter88', 10000)
// saleOffices.trigger('squareMeter110', 20000)

// 通用的
var event = {
  clientList: {}, // 缓存列表
  // 订阅
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  // 发布
  trigger: function () {
    var key = [].shift.call(arguments),
        fns = this.clientList[key]
    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  },
  // 取消订阅
  remove: function (key, fn) {
    var fns = this.clientList[key]
    if (!fns) {
      return false
    }
    // 如果木有传回调函数，就取消该 key 对应的所有订阅
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      // fns.filter(_fn => _fn !== fn)
      fns.forEach(_fn => {
        if (_fn !== fn) {
          console.log('?')
          return fn
        }
      })
      console.log('fns', fns)
    }
  }
}

var installEvent = function (obj) {
  obj = Object.assign(obj, event)
}

var saleOffices = {a: 1}
installEvent(saleOffices)
saleOffices.listen('squareMeter88', fn1 = function (price) {
  console.log(`小明获得房屋信息：房价=${price}`)
})
saleOffices.listen('squareMeter110', fn2 = function (price) {
  console.log(`小红获得房屋信息：房价=${price}`)
})

saleOffices.trigger('squareMeter88', 10000)
saleOffices.trigger('squareMeter110', 20000)
saleOffices.remove('squareMeter88', fn1)
saleOffices.trigger('squareMeter88', 10000)

