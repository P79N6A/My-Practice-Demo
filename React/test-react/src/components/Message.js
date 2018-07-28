import React from 'react'
import { Link, Route } from 'react-router-dom'
import Rendering from './Rendering'
import Component from './Component'

const Message = ({match}) => (
  <div>
    <h4>Message</h4>
    <ul>
      <li><Link to={`${match.url}/rendering`}>rendering</Link></li>
      <li><Link to={`${match.url}/components`}>components</Link></li>
    </ul>
    <Route path={`${match.url}/rendering`} component={Rendering}></Route>
    <Route path={`${match.url}/components`} component={Component}></Route>
  </div>
)

export default Message