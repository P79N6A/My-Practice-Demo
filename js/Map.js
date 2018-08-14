let o = {a: 1}
let arr = [['name', 'Lin'], ['age', 3]]

let m1 = new Map()
let m2 = new Map(arr)

m1.set(o, 'hhh')
m1.size

m1.delete('ccc')

for (let [k, v] of m1.entries()) {
  console.log('key: ', k)
  console.log('value: ', value)
}