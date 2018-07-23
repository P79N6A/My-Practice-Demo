import React from 'react'

class TodoItem extends React.Component {
  render () {
    return (
      <li onClick={() => this.props.onItemClick(this.props.id)}>{this.props.text}</li>
    )
  }
}

export default TodoItem