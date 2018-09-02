import React from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'

class Navigation extends React.Component {
  linkTo (url) {
    console.log('e', url)
    this.props.history.push(url)
  }
  render () {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        onClick={({key}) => this.linkTo(key)}
      >
        <Menu.Item key="/todo">待办事项</Menu.Item>
        <Menu.Item key="/testRouter">测试嵌套路由</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Navigation)
