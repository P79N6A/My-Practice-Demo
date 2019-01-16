setTimeout(() => {
  console.log(0)
})

new Promise(resolve => {
  resolve(1)
  Promise.resolve().then(t => {
    console.log(2)
    new Promise(resolve => {
      resolve(6)
    })
    .then(t => {
      console.log(t)
    })
  })
  console.log(3)
})
.then(t => {
  console.log(t)
})

console.log(5)