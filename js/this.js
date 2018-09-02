a()
function a() {
  console.log('a', this)
  b()
}
function b() {
  console.log('b', this)
  c()
}

function c() {
  console.log('c', this)
  console.log('c')
}

function O () {
  this.name = 'hah'
  console.log(this)
  return 'xxx'
}

var o = new O()
console.log(o.name)