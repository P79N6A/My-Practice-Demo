var updateQueue

export class Component {
  // 初始化
  constructor () {
    this.context = {}
    this.props = {}
    this.state = {}
  }

  setState (payload) {
    // 把所有的更新都推到更新队列中
    this.updater.enqueueSetState(this, payload)
    // 重新渲染，遍历更新队列，再改变
  }
}

export default React = {
  // 返回真实的 dom
  createElement (Component) {
    // 创建实例
    const instance = new Component()
    // 获得jsx / html字符串
    html = instance.render()
    // 解析成 js 对象
    jsx = parseHTML(html)
    // 转为 虚拟 DOM
    virsualDom = parse(jsx)
    // 转为真实的 dom
    return getReal(virsualDom)
  }
}