import React, { Component } from 'react'

export default (WrapperComponent, name) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount () {
      // 模拟获取 localstorage 数据
      let data = localStorage.getItem(name)
      try {
        this.setState({data: JSON.parse(data)})
      } catch (e) {
        this.setState({data})
      }
    }

    saveData (data) {
      try {
        // 尝试把它解析成 json 字符串，但是好像都不会报错的吧？
        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {
        localStorage.setItem(name, data)
      }
    }

    render () {
      return (
        <WrapperComponent
          data={this.state.data}
          saveData={this.saveData.bind(this)}
          {...this.props} />
      )
    }
  }

  return NewComponent
}