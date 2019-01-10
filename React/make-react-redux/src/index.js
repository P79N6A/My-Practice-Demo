import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Content from './Content'
import Header from './Header'
import { Provider} from './react-redux'

function createStore (reducer) {
  let state = null
  const listeners = []
  const getState = () => state
  const subscribe = (listener) => listeners.push(listener)
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({}) // 初始化
  return { getState, subscribe, dispatch }
}

// reducer
const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red'
    }
  }

  switch (action.type) {
    case 'CHANGE_BLUE': {
      debugger
      return {
        themeColor: action.themeColor
      }
    }
    case 'CHANGE_RED': {
      return {
        themeColor: action.themeColor
      }
    }
    default:
      return state
  }
}

const store = createStore(themeReducer)
// let oldState = store.getState()
// store.subscribe(() => {
//   const newState = store.getState()
//   renderApp(newState, oldState)
//   oldState = newState
// })

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
