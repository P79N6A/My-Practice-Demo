import React, { Component } from './react'
import ReactDOM from './react-dom'
import Test from './Test'

// 需要把 jsx（现在用普通字符串代替），转为 真实的 DOM

// ReactDOM.render(
//   <Test />,
//   document.getElementById('root')
// )

ReactDOM.render(
  React.createElement(Test),
  document.getElementById('root')
)