import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from './Route'
import { Link } from './Link'
import Test from './Test'

const App = () => {
  return (
    <div>
      <Link to='/test1'/>
      <Link to='/haha1' />
      <Route exact path='/test' component={Test} />
      <Route path='/haha' render={() => <div>haha</div>} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

