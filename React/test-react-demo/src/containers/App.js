import React from 'react'
import { Route } from 'react-router-dom'
// import { Button } from 'antd'
import TodoContainer from './TodoContainer'
import Navigation from '@/components/Navigation'
import TestRouter from '@/components/TestRouter'

const App = (props) => {
  return (
    <div>
      <Navigation></Navigation>
      <Route exact path="/todo" component={TodoContainer}></Route>
      <Route path="/testRouter" component={TestRouter}></Route>      
    </div>
    // <Button>123</Button>
  )
}

export default App
