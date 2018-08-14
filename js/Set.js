let s = new Set()
s.add(1)
s.add(1)
s.add('1')

for (let key of s.keys()) {
  console.log('key', key)
}

s.forEach(item => {
  console.log(item)
})

var arr = [1, 2, 3]
var a = arr.filter(x => x % 2 === 0)