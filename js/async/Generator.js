// yield next 使用
function* perfect () {
  var x = 1
  var y = 2
  var sum
  sum = yield x + y
  console.log(sum)
  yield 'xixi'
}

var ge = perfect()
ge.next()
ge.next(10)
ge.next()


// throw 
function* generator () {
  try {
    yield 1
  } catch (err) {
    console.log('err', err)
    yield 'haha'
    yield 'xixi'
  }
}
var ge = generator()
console.log(ge.next())
console.log(ge.throw('?'))
console.log(ge.next())
console.log(ge.next())


// return 方法
function* genenrator () {
  yield 1
  yield 2
  yield 3
}
var ge = generator()
ge.return(100) // {value: 100, done: true}

function* generator () {
  try {
    yield 1
    yield 2
  } catch (e) {}
  finally {
    yield 3
    yield 4
  }
}
var ge = generator()
console.log(ge.next())// {value: 1, done: false}
console.log(ge.return(100)) // {value: 3, done: false}
console.log(ge.next()) // {value: 4, done: false}
console.log(ge.next()) // {value: 100, done: true}


// yield* 表达式
function* otherGenerator () {
  yield 'ha'
  yield 'xi'
  return 4
}
function* generator () {
  yield 5
  var value = yield* otherGenerator()
  console.log(value)
}
var ge = generator()
for (var v of ge) {
  console.log(v)
}

/// 实例
/// 模拟实现 flatMap
function* flatMap (item) {
  if (Array.isArray(item)) {
    for (var i = 0; i < item.length; i++) {
      yield* flatMap(item[i])
    }
  } else {
    yield item
  }
}
var ge = flatMap([1, [2, 3], 4, [5, 6], 7])
for (var v of ge) {
  console.log(v)
}

// generator 函数的 this
function* generator () {
  console.log(this)
}
var ge = generator()



// 异步应用
function readFile (filename, cb) {
  cb(filename)
}

var thunk = function (fn) {
  return function () {
    var args = [...arguments]
    return function (callback) {
      args.push(callback)
      return fn.apply(this, args)
    }
  }
}
var readFileChunk = thunk(readFile)
readFileChunk('1.txt')(function (data) { console.log(data) })

var thunk = function (fn) {
  return function (...args) {
    return function (callback) {
      return fn.apply(this, [...args, callback])
    }
  }
}
var readFileChunk = thunk(readFile)
readFileChunk('1.txt')(function (data) { console.log(data) })

// 递归
function readFile (filename, cb) {
  cb('no error', filename)
}
var thunk = function (fn) {
  return function (...args) {
    return function (callback) {
      return fn.apply(this, [...args, callback])
    }
  }
}
var readFileChunk = thunk(readFile)

function run (fn) {
  var gen = fn()

  function next (err, data) {
    var result = gen.next(data)
    if (result.done) return
    result.value(next)
  }

  next()
}

function* generator () {
  var a = yield readFileChunk('A')
  console.log(a)
  var b = yield readFileChunk('B')
  var c = yield readFileChunk('C')
}
run(generator)


// 基于 promise 的自动化
function readFile (filename, cb) {
  cb(filename)
}

var readFilePromise = function (fileName) {
  return new Promise((resolve, reject) => {
    readFile(fileName, function (data) {
      resolve(data)
    })
  })
}

function* run () {
  var f1 = yield readFilePromise('A')
  console.log(f1)
  var f2 = yield readFilePromise('B')
  console.log(f2)
}

// var gen = run()
// gen.next().value.then(function (data) {
//   gen.next(data).value.then(function (data) {
//     gen.next(data).value.then(function () {})
//   })
// })

function ha (fn) {
  var gen = fn()

  function nextStep (data) {
    var result = gen.next(data)
    if (result.done) return result.value
    result.value.then(nextStep)
  }

  nextStep()
}
ha(run)