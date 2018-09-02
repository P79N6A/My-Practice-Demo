import React from 'react'
// import Tacos from './Tacos'
import { Route, Link } from 'react-router-dom'
import About from './About'
import Message from './Message'
import Param from './Param'
// import Recursive from './Recursive'
import RouteConfig from './RouteConfig'

const App = () => (
  <div>
    <ul>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/message">message</Link></li>
      <li><Link to="/param">param</Link></li>
    </ul>
    <div>
      <Route path="about" component={About}></Route>
      <Route path="/message" component={Message}></Route>
      <Route path="/param" component={Param}></Route>
    </div>
    {/* <Recursive></Recursive> */}
    <RouteConfig></RouteConfig>
  </div>
)

// class App extends React.Component {
//   construtor () {
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick () {
//     console.log(this)
//   }
//   render () {
//     return (
//       <button onClick={this.handleClick}>123</button>
//     )
//   }
// }

export default App