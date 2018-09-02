// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '@/redux/store/index'
import App from '@/containers/App'

ReactDOM.render(
  <Provider store={store}>
    {/* 有写 routes 配置的话用这个 */}
    {/* <BrowserRouter history={history} children={routes} /> */}
    {/* 没有 routes 配置就直接嵌套元素 */}
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
