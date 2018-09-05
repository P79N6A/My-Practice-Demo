// function makeIterator (arr) {
//   var index = 0
//   return {
//     next: function () {
//       return index < arr.length ?
//         { value: arr[index++], done: false } :
//         { value: undefined, done: true}
//     }
//   }
// }

// var iter = makeIterator(['a', 'b'])
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// var arr = ['a', 'b', 'c']
// var iter = arr[Symbol.iterator]()

// console.log(iter.next())

// var obj = {
//   0: 'ha',
//   1: 'xi',
//   length: 2,
//   [Symbol.iterator]() {
//     var index = 0;
//     var self = this
//     function next () {
//       return index < self.length ?
//       {
//         value: self[index++],
//         done: false
//       } :
//       {
//         value: undefined,
//         done: false
//       }
//     }
//     return {
//       next
//     }
//   }
// }

// console.log([...obj])

// var arr = [1,2,3]
// var [x, ...rest] = arr
// console.log(x)

var arr = ['a', 'b', 'c']

// for (var k of arr.keys()) {
//   console.log(k)
// }
console.log(arr.keys())