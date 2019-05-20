App({
  onLaunch: function () {
    wx.login({
      success (res) {
        console.log(res)
      }
    })
    wx.getUserInfo({
      success (res) {
        console.log(res)
      }
    })
  }
})
