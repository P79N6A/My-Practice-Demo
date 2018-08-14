import React from 'react'
import { Layout } from 'antd'
import { Route } from 'react-router-dom'
import Login from '../containers/Login'
import Test from '../components/Test'
import './app.css'

const App = () => {
  return (
    <Layout style={{height: '100%'}}>
      {/* 主页面 */}
      <Layout></Layout>
      {/* 登录页 */}
      <Route component={Login}></Route>
      {/* <Route component={Register}></Route> */}
      <Test></Test>
    </Layout>
  )
}

export default App
