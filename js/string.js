// let s = '𠮷a'

// console.log(s.codePointAt(0))
// console.log(s.codePointAt(1))
// console.log(s.codePointAt(2))

// for (let t of s) {
//   console.log(t.codePointAt().toString(16))
// }

// 
// console.log(String.fromCodePoint(134071)) // 𠮷
// console.log(String.fromCodePoint(0x20bb7)) // 𠮷
// console.log(String.fromCodePoint(134071, 0x20bb7))

//
// for (let t of '𠮷a') {
//   console.log(t)
// }

// search
// var str = 'I miss u.'
// var searchStr = 'miss'
// console.log(str.indexOf(searchStr)) // 2
// console.log(str.includes(searchStr, 2)) // true
// console.log(str.startsWith(searchStr)) // false
// console.log(str.startsWith(searchStr, 2)) // true
// console.log(str.endsWith(searchStr, 6)) // true


// repeat
/**
 * 重复执行次数的字符串
 * str.repeat(times)
 * @param {number}
 * @return {string} 重复后的字符串
 */
// 'Lin'.repeat(3)


// pad
/**
 * 填充字符串
 * str.padStart(minLen, padStr)
 * @param {number} minLen 字符串不够这个长度，就填充到这个长度
 * @param {string | number} padStr 用来填充的字符串。优先选前面的字符填充，直到填满
 */
// console.log('lin'.padStart(5, 'abcde'))
// console.log('lin'.padEnd(5, 'abcde'))


//
// let html = `
//   <div>
//     <span>123</span>
//   </div>
// `
// console.log(html)
// console.log(html.trim())

// let obj = {
//   valueOf () {
//     return 'haha'
//   },
//   toString () {
//     return 'xixi'
//   }
// }

// console.log(`${obj}`)


//
// function isString (str) {
//   if (typeof str === 'string') {
//     return true
//   }
//   return false
// }

// 标签
let a = 1
let b = 3
tag`hello ${a + b} world ${b - a}`
function tag () {
  console.log([].slice.apply(arguments))
}