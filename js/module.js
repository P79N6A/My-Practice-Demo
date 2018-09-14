export var name = 'Lin'
export var year = 1998


// var name = 'Lin'
// var year = 1998
// export {
//   name, year
// }

// function f1 () {}
// function f2 () {}

// export {
//   f1 as function1,
//   f2 as function2
// }

// xx.js
export var a = 1
export function b () {}

export {a, b}
export {
  a as haha,
  b as xixi
}

// main.js
import {a, b} from 'xx.js'
import {
  a as hi,
  b as hello
} from 'xx.js'

// xx.js
var c = {}
export default c

// main.js
import every from 'xx.js'

// 整体转发
export * from 'xx/js'

// 整体导入
import * as obj from 'xx.js'

// from.js
export {
  a as haha, 
  b, c
} // 导出；重命名；
export var a // 变量声明、函数声明，可以直接导出
export function b () {}
export default a
export default 42
export * from 'other.js' // 转发
export {ooo, iii} from 'other.js' // 转发 ooo iii 变量，但是在本文件无法访问到

// 错误写法
export 42

// main.js
import {
  a as xixi, 
  b, c
} from 'from.js' // 导入；重命名
import * as module from 'from.js' //  导入 from 模块中的所有 export 的，并命名为 module。通过 module.xxx 访问其中的变量
import a from 'from.js' // 导入 from 模块中的 default
