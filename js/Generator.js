// function* helloGenerator () {
//   yield 'hello'
//   yield 'generator'
//   return 'bye'
// }

// const hi = helloGenerator()
// console.log(hi.next())
// console.log(hi.next())
// console.log(hi.next())

// function* generator () {
//   var x = 1
//   var y = 2
//   var sum 
//   sum = yield x + y // 执行到这里第一次停止
  
//   console.log(sum) // undefined
//   yield 'haha' // 第二次停止

//   return sum // 第三次停止
// }

// var ge = generator()
// console.log(ge.next())
// console.log(ge.next())

// function* generator () {
//   try {
//     yield
//   } catch (err) {
//     console.log('err', err)
//     yield '?'
//     yield '??'
//   }
// }
// const ge = generator()
// ge.next()
// ge.throw(new Error(new Error('出错了！')))
// ge.next()

// function* otherGenerator () {
//   yield 'hhahahah'
//   yield 'miaomiaomiao'
//   return 'every day'
// }

// function* generator () {
//   yield 1 + 2
//   var a = yield* otherGenerator()
//   console.log('return', a)
//   yield 444
//   return 'xixi'
// }

// var ge = generator()
// for (var k of ge) {
//   console.log(k)
// }

// var arr = [1,[2,3,[4,5,[6,7]], 8], 9]

// function* iterTree (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var item = arr[i]
//     if (Array.isArray(item)) {
//       yield *iterTree(arr)
//     } else {
//       yield item
//     }
//   }
// }

// for (var k of iterTree(arr)) {
//   console.log(k)
// }

// var obj = {
//   *generator () {},
//   otherGenerator: function* () {}
// }

// function* generator () {
//   this.x = 111
// }
// var ge = generator()
// console.log(ge.x)
