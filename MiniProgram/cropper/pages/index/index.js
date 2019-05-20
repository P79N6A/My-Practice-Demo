// 获取设备系统信息
const { pixelRatio, screenWidth, screenHeight } = wx.getSystemInfoSync()
console.log(screenWidth)
console.log(screenHeight)

// 1rpx = 750 / screenWidth = 2px
const cropperWidth = screenWidth
const cropperHeight = screenHeight - 200 // 减50是为了预留下面的距离
const cutWitdh = cropperWidth - 100
const cutHeight = cutWitdh

Page({
  data: {
    // 单位传入 px 就可以了，会根据 dpr 转为对应的 rpx（这句话去掉）
    // 画布相关配置
    cropperOptions: {
      width: cropperWidth,
      height: cropperHeight,
      pixelRatio,
      maxScale: 1.5,
      cut: { // 裁剪框相关信息
        width: cutWitdh,
        height: cutHeight,
        x: (cropperWidth - cutWitdh) / 2,
        y: (cropperHeight - cutHeight) / 2
      }
    }
  }
})