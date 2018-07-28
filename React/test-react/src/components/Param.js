import React from 'react'
import { Link, Route } from 'react-router-dom'
import Inbox from './Inbox'

const Param = ({match}) => (
  <div>
    <h3>Param</h3>
    <ul>
      <li><Link to={`${match.url}/lin`}>lin</Link></li>
      <li><Link to={`${match.url}/xlc`}>xlc</Link></li>
    </ul>
    <div>
      <Route path={`${match.url}/:paramId(xlc|desc)`} component={Inbox}></Route>
    </div>
  </div>
)

export default Param