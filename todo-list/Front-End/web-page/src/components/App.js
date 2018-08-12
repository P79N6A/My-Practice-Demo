import React from 'react'
import { Layout } from 'antd'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <Layout>
      {/* 主页面 */}
      <Layout></Layout>
      {/* 登录页 */}
      <Route component={Login}></Route>
      {/* <Route component={Register}></Route> */}
    </Layout>
  )
}

export default App
