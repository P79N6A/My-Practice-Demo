import React from 'react'
import { Link, Route } from 'react-router-dom'
import Bar from './Bar'

class Home extends React.Component {
  render () {
    const { match } = this.props
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to={`${match.url}/haha`}>?</Link></li>
        </ul>

        <Route path={`${match.url}/:id`} component={Bar}></Route>
      </div>
    )
  }
}

export default Home