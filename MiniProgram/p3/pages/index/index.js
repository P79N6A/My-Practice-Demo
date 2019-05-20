const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
      }
    });
  },
})
