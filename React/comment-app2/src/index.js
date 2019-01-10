import React from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './containers/CommentApp'
import { Provider } from 'react-redux'
import './index.css'
import { createStore } from 'redux'
import commentReducer from './reducers/comment'

const store = createStore(commentReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);
