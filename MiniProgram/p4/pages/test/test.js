Page({
  onLoad () {
    console.log('123')
    wx.chooseImage({
      success: (res) => {
        wx.previewImage({
          urls: [res.tempFilePaths[0]], // 图片地址列表
          success: (res) => {
            console.log('33')
          }
        });
      }
    });
  }
})