import React from 'react'
import { Layout } from 'antd'
import Login from '@/containers/Login'
const { Content, Header } = Layout

const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <Layout style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}></Header> */}
        <Content style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center' }}>
          <Login style={{ height: '100%' }}></Login>
        </Content>
      </Layout>
    </div>
  )
}

export default App