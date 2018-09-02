import React from 'react'

class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }
  handleDeleteClick (value) {
    this.props.onDeleteClick(value)
  }
  render () {
    let { todo } = this.props
    return (
      <li>
        {todo.text}
        {todo.time}
        <span onClick={() => this.handleDeleteClick(todo.id)} style={{cursor: 'pointer'}}>×</span>
      </li>
    )
  }
}

export default TodoItem