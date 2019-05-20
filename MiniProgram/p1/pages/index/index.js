Page({
  data: {
    src: '',
    width: 250,//宽度
    height: 250,//高度
  },
  onLoad: function (options) {
    //获取到image-cropper对象
    this.cropper = this.selectComponent("#image-cropper");
    console.log('加载 cropper')
    //开始裁剪
    let _this = this
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        _this.setData({
          src: res.tempFilePaths[0]
        })
      },
    })
  },
  cropperload(e) {
    console.log("cropper初始化完成");
  },
  loadimage(e) {
    console.log("图片加载完成", e.detail);
    wx.hideLoading();
    //重置图片角度、缩放、位置
    this.cropper.imgReset();
  },
  clickcut(e) {
    console.log(e.detail);
    //点击裁s剪框阅览图片
    wx.previewImage({
      current: e.detail.url, // 当前显示图片的http链接
      urls: [e.detail.url] // 需要预览的图片http链接列表
    })
  },

  handleCancel () {
    // 返回上一页
    // ...
  },
  handlePreview () {
    this.cropper._click((e) => {
      console.log(e);
      // //点击裁s剪框阅览图片
      wx.previewImage({
        current: e.url, // 当前显示图片的http链接
        urls: [e.url] // 需要预览的图片http链接列表
      })

    })
  },
  handleSubmit () {
    console.log(this.cropper.getImg((e) => this.setData({ src: e.url})))
  }
})