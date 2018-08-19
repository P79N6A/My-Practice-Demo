import React from 'react'
import { Layout } from 'antd'
import { Route } from 'react-router-dom'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Test from '../components/Test'
import './app.css'

const App = () => {
  return (
    <Layout style={{height: '100%'}}>
      {/* 主页面 */}
      <Layout></Layout>
      {/* 登录页 */}
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      {/* <Route component={Register}></Route> */}
      <Test></Test>
    </Layout>
  )
}

export default App
