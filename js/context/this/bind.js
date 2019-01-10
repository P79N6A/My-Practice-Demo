var o = {x : 1}

function test () {
  console.log(arguments)
}

var f = test.bind(o, 1, 2, 3)
f(4, 5, 6)