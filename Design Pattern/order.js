// var btn = document.getElementById('btn')
// var setCommand = function (button, command) {
//   button.onclick = function () {
//     command.execute()
//   }
// }

// var refreshBar = {
//   refresh: function () {
//     console.log('更新')
//   }
// }

// // 命令类
// var RefreshCommand = function (receiver) {
//   this.receiver = receiver
// }
// RefreshCommand.prototype.execute = function () {
//   this.execute.refresh()
// }

// var refreshCommand = new RefreshCommand(refreshBar)
// setCommand(btn, refreshCommand)

// js 用回调函数
// var setCommand = function (button, command) {
//   button.onclick = function () {
//     command.execute()
//   }
// }

// var refreshBar = {
//   refresh: function () {
//     console.log('更新')
//   }
// }

// var RefreshBarCommand = function (receiver) {
//   return {
//     execute: receiver.refresh
//   }
// }

// var refreshBarCommand = RefreshBarCommand(refreshBar)
// setCommand(button, refreshBarCommand)
