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


var sendBtn = document.getElementsByClassName('input-send j_input-send')[0]
var sendTextInput = document.getElementsByClassName('input-box j_input-box input-box_free')[0]

function sendTv (msg) {
  sendTextInput.value = msg
  sendBtn.click()
}

var setTag = setInterval(() => {
  sendTv('浩克最棒~')
}, 2000)