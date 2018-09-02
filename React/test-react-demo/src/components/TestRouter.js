import React from 'react'
import { Route, Link } from 'react-router-dom'

const innerCom = () => (
  <div>inner</div>
)

const TestRouter = ({match}) => (
  <div>
    <Link to={match.url + '/test'}>/testRouter/test</Link>
    <Route exact path={match.url + '/test'} component={innerCom}></Route>
  </div>
)

export default TestRouter
