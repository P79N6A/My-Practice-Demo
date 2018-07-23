import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render () {
    // console.log('tis.', this.props.todos)
    let todoList = this.props.todos.map(item => {
      return (
        <TodoItem
          id={item.id}
          text={item.text}
          key={item.id}
          onItemClick={this.props.onItemClick}
        >
          {todoList}
        </TodoItem>
      )
    })
    return (
      <ul>
        { todoList }
      </ul>
    )
  }
}

export default TodoList