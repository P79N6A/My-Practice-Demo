import React, { Component } from 'react'
import PropTypes from 'prop-types'

let instances = []
const register = (comp) => instances.push(comp)
const unregister = (comp) => instances.splice(instances.indexOf(comp), 1)

export const historyPush = (url) => {
  window.history.pushState({}, null, url)
  instances.forEach(instance => instance.forceUpdate())
}

export const historyReplace = (url) => {
  window.history.replace({}, null, url)
  instances.forEach(instance => instance.forceUpdate())
}

const matchUrl = (nowPath, options) => {
  const { path, exact = false } = options

  // 判断是否有传入 path
  if (!path) {
    // 没有传入 path 应该是当成木有匹配成功吧...
    return {
      path: null,
      url: nowPath,
      isExact: true
    }
  }

  const isMatch = new RegExp(`^${path}`).exec(nowPath)
  if (!isMatch) {
    return null
  }

  const url = isMatch[0]
  const isExact = (url === nowPath)

  // 如果匹配了，有 exact 要求
  // 判断是否是精确匹配
  if (exact && !isExact) {
    return null
  }

  return {
    path,
    url,
    isExact
  }
}

export class Route extends Component {
  static propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.func, // 组件是个函数咯？是个 class 实例。u.u 感觉是个对象....
    render: PropTypes.func
  }

  componentWillMount () {
    window.addEventListener('popstate', this.handlePop.bind(this))
    register(this)
  }

  componentWillUnmount () {
    unregister(this)
    window.removeEventListener('popstate', this.handlePop.bind(this))
  }

  handlePop () {
    debugger
    this.forceUpdate()
  }

  render () {
    const { component, render, exact, path } = this.props

    const match = matchUrl(window.location.pathname, { path, exact })
    debugger
    // 把 if 分单层写，会比嵌套的 if 看起来舒服吧
    if (!match) {
      return null
    }
    if (component) {
      return React.createElement(component, { match })
    }
    if (render) {
      return render({ match })
    }
  }
}
