// // 解构赋值
// // let {o1, o2} = {
// //   o3: 'bbb',
// //   o1: 'aaa'
// // }

// // console.log(o2)
// // console.log(o1)


// // 属性简写
// // let a = 1
// // let b = 2
// // let obj = {a, b} // {a: a, b: b}
// // console.log(obj)

// // 方法简写
// // let o = {
// //   sayHi () {
// //     console.log('hi')
// //   }
// //   // 相当于
// //   // sayHi: function () {}
// // }
// // o.sayHi()


// // 属性名
// // js 定义属性
// let ob = {}
// let m = 'h'
// let n = 'a'
// // 方法一：标识符表示属性名
// ob.a = 1
// // 方法二：表达式表示属性名
// ob[m + n] = 3
// // 方法三：Object.defineProperty()
// Object.defineProperty(ob, 'name', {
//   value: 'Lin',
//   enumerable: true,
//   configurable: true
// })
// // console.log(ob)

// let ooo = {
//   [m]: 'ya',
//   [m + n]: 'xixi'
// }
// // console.log(ooo)

// // 定义方法
// let oo = {
//   [m] () {
//     console.log('hahahah')
//   }
// }
// // oo[m]() // hahahah

// // error
// // let oooo = { [m] }


// /**
//  * 判断两个值是否相等
//  * Object.is(val1, val2)
//  * 
//  * @param {any} val1
//  * @param {any} val2
//  * @returns {Boolean} [true, false]
//  */
// // console.log(Object.is('', false))
// // console.log('' == false)
// // console.log(Object.is({}, {}))
// // console.log(Object.is(+0, -0))
// // console.log(+0 === -0)
// // console.log(Object.is(NaN, NaN))
// // console.log(NaN === NaN)


/**
 * 将所有可枚举属性的值从一个或多个源对象复制到目标对象
 * 它将返回目标对象。（目标对象会被修改）
 * Object.assgin(targetObj, sourceObj1, sourceObj2, ...)
 * 
 * @param {object} targetObj
 * @param {object} sourceObj1
 * @returns {object} targetObj
 */
// let obj = {
//   a: 1,
//   b: 2
// }
// Object.assign(obj, {a: 3, c: 4})
// console.log(obj) // { a: 3, b: 2, c: 4 }

// console.log(Object.assign(1, {a: 1}))
// console.log(Object.assign({}, 1, 2))

// let o = Object.assign({}, {
//   a: 1,
//   sayHi () {
//     console.log('hi')
//   }
// })
// console.log(o) // {a: 1, sayHi: ƒ}

// function clone (obj) {
//   return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)
// }


// // 遍历相关
// function Super () {
//   this.super = 'superValue'
//   this[Symbol('superSymbol')] = 'haha' // 可枚举的 Symbol
// }
// function Sub () {
//   this.sub = 'subValue'
//   this[Symbol('subSymbol')] = 'xixi'
// }
// var sup = new Super()
// // 定义不可枚举的属性
// Object.defineProperty(sup, 'superEnum', {
//   enumerable: false,
//   configurable: false,
//   value: 'superEnumValue'
// })
// // 定义不可枚举的 Symbol
// Object.defineProperty(sup, Symbol('superEnumSymbolValue'), {
//   enumerable: false,
//   configurable: false,
//   value: 3
// })
// // 定义继承
// Sub.prototype = sup
// var sub = new Sub()
// Object.defineProperty(sub, 'subEnum', {
//   enumerable: false,
//   configurable: false,
//   value: 'subEnumValue'
// })
// Object.defineProperty(sub, Symbol('subEnumSymbolValue'), {
//   enumerable: false,
//   configurable: false,
//   value: 1
// })


// // 可遍历继承、不可遍历 symbol、不可遍历不可枚举的
// for (var i in sub) {
//   console.log(i)
//   // sub
//   // super
// }

// // 不可遍历继承、不可遍历 symbol、不可遍历不可枚举的
// console.log(Object.keys(sub)) // [ 'sub' ]
// console.log(Object.values(sub)) // [ 'subValue' ]
// console.log(Object.entries(sub)) // [ [ 'sub', 'subValue' ] ]

// // 不可遍历继承、不可遍历 symbol、可遍历不可枚举的（包括不可枚举的 Symbol）
// console.log(Object.getOwnPropertyNames(sub)) // [ 'sub', 'subEnum' ]

// // 不可遍历继承、可遍历 symbol、不可遍历不可枚举的
// console.log(Object.getOwnPropertySymbols(sub)) // [ Symbol(subSymbol) ]

// // 不可遍历继承、可遍历 Symbol、可遍历不可枚举的
// console.log(Reflect.ownKeys(sub)) // [ 'sub', 'subEnum', 'subEnumSymbol', Symbol(subSymbol) ]

// // 不可遍历继承、可遍历 Symbol、可遍历不可枚举的
// console.log(Object.getOwnPropertyDescriptors(sub)) // 


// 描述对象
var o = {
  a: 1,
  get name () {
    return 'Lin'
  }
}

/**
 * 获取对象自身的某个属性的描述对象
 * Object.getOwnPropertyDescriptor(obj, prop)
 * 
 * @param {object} obj
 * @param {string} prop
 * @returns {object | undefined}
 */
// console.log(Object.getOwnPropertyDescriptor(o, 'a')) // { value: 1, writable: true, enumerable: true, configurable: true }
// console.log(Object.getOwnPropertyDescriptor(o, 'b')) // undefined

/**
 * 获取对象自身的所有属性的描述对象（非继承）
 */
// console.log(Object.getOwnPropertyDescriptors(o)) 

// var target = {}
// var source = {
//   get a () {
//     return 'a'
//   }
// }
// console.log(Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)))

// const shallowMerge = (target, source) => Object.defineProperties(
//   target,
//   Object.getOwnPropertyDescriptors(source)
// )


// 原型对象
// var obj = {}
// console.log(Object.getPrototypeOf(obj))

// super
// var proto = {
//   name: 'Lin'
// }

// var obj = {
//   test () {
//     return super.name
//   }
// }
// Object.setPrototypeOf(obj, proto)
// console.log(obj.test()) // Lin


// ...
// var obj = {
//   a: 1,
//   b: 2
// }
// console.log({...obj}) // { a: 1, b: 2 }

// var obj = {a: 1}
// // 写法一
// var clone = {
//   __proto__: Object.getPrototypeOf(obj),
//   ...obj
// }

// // 写法二
// var clone = Object.assign(
//   Object.create(Object.getPrototypeOf(obj)),
//   obj
// )

// // 写法三
// var clone = Object.create(
//   Object.getPrototypeOf(obj),
//   Object.getOwnPropertyDescriptors(obj)
// )


var a = {}
let runtimeError = {
  ...a,
  ...{
    get x() {
      throw new Error('throw now');
    }
  }
};

