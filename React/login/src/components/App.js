import React from 'react'
import { Layout } from 'antd'
import Login from '../containers/Login'
const { Content, Header } = Layout

const App = () => {
  return (
    <div>
      <Layout>
        <Header>hahaha</Header>
        <Content><Login></Login></Content>
      </Layout>
    </div>
  )
}

export default App