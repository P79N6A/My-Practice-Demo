import React from 'react'
import './Square.css'

class Square extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    if (this.props.value) {
      return
    } else {
      this.props.onClick(this.props.index)
    }
  }
  render () {
    return (
      <div className="square" onClick={this.handleClick}>{this.props.value}</div>
    )
  }
}

export default Square