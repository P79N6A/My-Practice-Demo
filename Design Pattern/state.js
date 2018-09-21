// var Light = function () {
//   this.state = 'off'
//   this.button = null
// }

// Light.prototype.init = function () {
//   var button = document.createElement('button')
//   button.innerHTML = '开关'
//   this.button = document.body.appendChild(button)
//   this.button.onclick = () => {
//     this.buttonWasPressed()
//   }
// }

// Light.prototype.buttonWasPressed = function () {
//   if (this.state === 'off') {
//     console.log('开灯啦')
//     this.state = 'on'
//   } else {
//     console.log('关灯')
//     this.state = 'off'
//   }
// }

// var light = new Light()
// light.init()

var OffLightState = function (light) {
  this.light = light
}
OffLightState.prototype.buttonWasPressed = function () {
  console.log('弱光')
  this.light.setState(this.light.we)
}

var WeakLightState = function (light) {
  this.light = light
}
WeakLightState.prototype.buttonWasPressed = function () {
  console.log('')
}