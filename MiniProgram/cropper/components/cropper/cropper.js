let utils = {
  isObject (args) {
    return typeof args === 'object' && args.toString() === '[object Object]'
  },
  // 把一般的函数改为 promise 形式
  wxPromise (fn) {
    return function (options, self) {
      if (!utils.isObject(options)) {
        throw new Error('请传入 object')
      }
      return new Promise((resolve, reject) => {
        options = {
          ...options,
          success (res) {
            resolve(res)
          },
          fail (res) {
            reject(res)
          }
        }
        
        fn(options)
      })
    }
  },
  // 防抖
  debounce (fn, delay) {
    let timer = null
    return function () {
      const args = [...arguments]
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.apply(this, args)
        
        timer = null
      }, delay)
    }
  }
}

const getImageInfo = utils.wxPromise(wx.getImageInfo)
const canvasToTempFilePath = utils.wxPromise(wx.canvasToTempFilePath)

Component({
  properties: {
    canvasWidth: {
      type: Number,
      value: 100
    },
    canvasHeight: {
      type: Number,
      value: 100
    },
    // x y width height
    cut: {
      type: Object,
      value: {
        width: 100,
        height: 100,
        x: 0,
        y: 0
      }
    },
    maxScale: {
      type: Number,
      value: 2.5
    }
  },
  lifetimes: {
    attached () {
      this.init()
      this.canvas = wx.createCanvasContext('my-cropper', this)
      let img = { src: '/assets/26.jpg'}
      getImageInfo(img)
        .then(res => {
          this.getDefaultImage(res)
          this.updateCanvas()
        })
        .catch(err => {
        })
    }
  },
  methods: {
    // 初始化
    init () {
      // this.oneTouchMove = utils.debounce(this.oneTouchMove, 30)
      this.oldScale = 1
    },
    // 获取图片默认应该设置的宽高
    getDefaultImage ({width, height}) {
      const { cut } = this.properties
      // 根据图片比例和裁剪框的比例，算出展示出来的图片的大小和位置
      const imgRatio = width / height
      const cutRatio = cut.width / cut.height

      // 
      // 
      // 如果图片宽高比更小（说明要宽更小，以宽来计算）
      // (x, y) 就是要让它居中展示
      // TODO：要不要考虑图片的原来的大小的问题？如果原来大小就比裁剪框小呢？
      if (imgRatio < cutRatio) {
        this.baseWidth = cut.width
        this.baseHeight = cut.width / imgRatio
        this.imgX = cut.x
        this.imgY = (this.properties.canvasHeight - this.baseHeight) / 2
      } else {
        this.baseWidth = cut.height * imgRatio
        this.baseHeight = cut.height
        this.imgX = (this.properties.canvasWidth - this.baseWidth) / 2
        this.imgY = cut.y
      }

      // 当前展示的图片的宽高
      this.currentImgWidth = this.baseWidth
      this.currentImgHeight = this.baseHeight
    },
    updateCanvas () {
      let { imgX, imgY, properties, currentImgHeight, currentImgWidth } = this
      let { x, y, height, width } = properties.cut
      // 判断是否超出裁剪框的范围
      if (imgY > y) {
        imgY = y
      } else if (imgY + currentImgHeight < y + height) {
        imgY = y + height - currentImgHeight
      }
      if (imgX > x) {
        imgX = x
      } else if (imgX + currentImgWidth < x + width) {
        imgX = x + width - currentImgWidth
      }

      this.canvas.drawImage(
        '/assets/26.jpg',
        imgX,
        imgY,
        this.currentImgWidth,
        this.currentImgHeight
      )
      this.initCutArea()
      this.canvas.draw(false, () => {
        
      })
    },
    handleTouchStart (e) {
      // 要监控是单指还是双指以上的 touchStart
      const touches = e.touches
      console.log(e)
      // 单指
      if (touches.length === 1) {
        this.oneTouchStart(touches[0])
      }

      // 双指或以上
      if (touches.length >= 2) {
        this.twoTouchStart(touches[0], touches[1])
      }
    },
    handleTouchMove (e) {
      // 判断是单指还是双指以上的 move
      const touches = e.touches
      if (touches.length === 1) {
        this.oneTouchMove(touches[0])
      }
      // 双指或以上
      if (touches.length >= 2) {
        this.twoTouchMove(touches[0], touches[1])
      }
    },
    // 单指拖放
    oneTouchStart (touch) {
      // 之后放到字节小程序上的话，要换成 clientX 哟
      this.touchStartX = touch.x || touch.clientX
      this.touchStartY = touch.y || touch.clientY
    },
    oneTouchMove (touch) {
      console.log(touch)
      // const xMove = Math.round(touch.x || touch.clientX - this.touchStartX)
      // const yMove = Math.round(touch.y || touch.clientY - this.touchStartY)

      // this.imgX += xMove
      // this.imgY += yMove

      // this.updateCanvas()

      // this.touchStartX = touch.x || touch.clientX
      // this.touchStartY = touch.y || touch.clientY
    },
    // 双指缩放
    twoTouchStart (touch0, touch1) {
      // this.oldTouch1 = touch1
      this.touchX1 = Math.round(this.imgX + this.currentImgWidth / 2)
      this.touchY1 = Math.round(this.imgY + this.currentImgHeight / 2)
      // 好像是需要过滤掉双指同向的情况的
      // 记录双指的初始距离（利用勾股定理）
      const xMove = Math.round(touch0.x || touch0.clientX - touch1.x || touch1.clientX)
      const yMove = Math.round(touch0.y || touch0.clientY - touch1.y || touch1.clientY)
      this.oldDistance = Math.round(Math.sqrt(xMove * xMove + yMove + yMove))
    },
    twoTouchMove (touch0, touch1) {
      // 根据双指移动距离，来计算应该缩放的比例，从而得到新的 currentImgWidth 和 currentImgHeight
      const xMove = Math.round(touch0.x || touch0.clientX - touch1.x || touch1.clientX)
      const yMove = Math.round(touch0.y || touch0.clientY - touch1.y || touch1.clientY)
      console.log('xMove', xMove)
      console.log('yMove', yMove)
      const newDistance = Math.round(Math.sqrt(xMove * xMove + yMove + yMove))
      console.log('newDistance', newDistance)
      // 获得新的缩放比例，就是用一个公式而已
      const zoom = 8 // 缩放系数（我也不知道干嘛用的）
      let newScale = this.oldScale + 0.001 * zoom * (newDistance - this.oldDistance)
      console.log('oldScale', this.oldScale)
      // 根据新的缩放比例，以及缩放限制，设定缩放范围
      newScale <= 1 && (newScale = 1)
      newScale >= this.properties.maxScale && (newScale = this.properties.maxScale)
      console.log('newScale', newScale)
      // 修改当前图片的宽高和坐标
      this.currentImgWidth = Math.round(this.baseWidth * newScale)
      this.currentImgHeight = Math.round(this.baseHeight * newScale)
      // 这个坐标我觉得有点怪怪的
      this.imgX = Math.round(this.touchX1 - this.currentImgWidth / 2)
      // console.log('width', this.currentImgWidth)
      // console.log(this.imgX)
      this.imgY = Math.round(this.touchY1 - this.currentImgHeight / 2)

      this.updateCanvas()

      // 更新
      this.oldScale = newScale
      this.oldDistance = newDistance
    },
    handleTouchEnd () {
      
    },
    // 裁剪区域初始化
    initCutArea () {
      const ctx = this.canvas
      
      // 画裁剪的边框
      let { x, y, width, height } = this.properties.cut
      let lineLength = 10
      let boundOptions = [
        {
          start: { x, y: y + lineLength },
          step1: { x, y },
          step2: { x: x + lineLength, y }
        },
        {
          start: { x: x + width - lineLength, y },
          step1: { x: x + width, y },
          step2: { x: x + width, y: y + lineLength }
        },
        {
          start: { x, y: y + height - lineLength },
          step1: { x, y: y + height },
          step2: { x: x + lineLength, y: y + height }
        },
        {
          start: { x: x + width - lineLength, y: y + height },
          step1: { x: x + width, y: y + height },
          step2: { x: x + width, y: y + height - lineLength }
        }
      ]

      let color = 'black'
      let lineWidth = 2
      boundOptions.forEach((option) => {
        ctx.beginPath()
        ctx.setStrokeStyle(color)
        ctx.setLineWidth(lineWidth)
        ctx.moveTo(option.start.x, option.start.y)
        ctx.lineTo(option.step1.x, option.step1.y)
        ctx.lineTo(option.step2.x, option.step2.y)
        ctx.stroke()
      })
    },
    getCutImage () {
      const { cut } = this.properties
      const { pixelRatio } = this
      wx.canvasToTempFilePath({
        x: cut.x,
        y: cut.y,
        width: cut.width,
        height: cut.height,
        destWidth: cut.width * pixelRatio,
        destHeight: cut.height * pixelRatio,
        canvasId: 'my-cropper',
        success: (res) => {
          wx.previewImage({
            urls: [res.tempFilePath],
          })
        }
      }, this)
    },
    test () {

    }
  }
});
