let obj = {
  a: 1
}
let s1 = Symbol(obj)
console.log(s1)

let arr = [1,2,3]
let s2 = Symbol(arr)
console.log(s2)

let s3 = Symbol('haha')
console.log(s3)

let s = Symbol()

let a = {}
a[s] = 'hahaha'

let b = {
  [s]: 'xixixi'
}

let c = {}
Object.defineProperty(c, s, { value: 'ahah' })

let s4 = Symbol('a')
let s5 = Symbol('b')
let obj = {
  [s4]: 'xixi',
  [s5]: 'haha'
}
const arr = Object.getOwnPropertySymbols(obj) // [Symbol(a), Symbol(b)]

let s6 = Symbol.for('Lin')
let s7 = Symbol.for('Lin')
console.log(s6 === s7)
console.log(Symbol.keyFor(s6))

const Even = {
  [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0
  }
}

1 instanceof Even
2 instanceof Even