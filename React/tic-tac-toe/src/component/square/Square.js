import React from 'react'
import './Square.css'

class Square extends React.Component {
  render () {
    return (
      <div className="square" onClick={(e) => this.props.onClick(this.props.index)}>{this.props.value}</div>
    )
  }
}

export default Square