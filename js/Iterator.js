function makeIterator (arr) {
  var index = 0
  return {
    next: function () {
      return index < arr.length ?
        { value: arr[index++], done: false } :
        { value: undefined, done: true}
    }
  }
}

var iter = makeIterator(['a', 'b'])
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
