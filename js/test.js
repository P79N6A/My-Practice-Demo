// var p  = Promise.resolve(1)
// p.then(v => console.log(v))
// console.log(p)


// 对象判空
// 1. 用 for...in
var obj = {}
function objectIsEmpty (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}
console.log(objectIsEmpty(obj))

// 2. 用 Object.keys()
function objectIsEmpty (obj) {
  return Object.keys(obj).length === 0 ? true : false
}
console.log(objectIsEmpty(obj))

// 3. 用 JSON.stringify
function objectIsEmpty (obj) {
  return JSON.stringify(obj) === '{}' ? true : false
}
console.log(objectIsEmpty(obj))

// async
async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
  await 3
  console.log('hha?')
}
async function async2(){
  console.log('async2')
}
Promise.resolve(2).then(r => console.log(r))
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
})

var p = new Promise((resolve, reject) => {
  resolve(1)
})
var p1 = Promise.resolve('haha')
var p2 = p.then(data => {
  return p1
})
setTimeout(() => console.log(p1 === p2), 0) // Promise {<resolved>: "haha"}