var p 

var p1 = p.then((v) => {
  // 根据这个返回值来决定 p1 的状态的
  return p
})
var p2 = p1.then()



// p.then().then()