import React from 'react'
import { Route } from 'react-router-dom'
import Carnitas from './Carnitas'

const Tacos = (props) => (
  <div>
    Tacos
    <Route
      path={props.match.url + '/carnitas'}
      component={Carnitas}
    />
  </div>
)

export default Tacos