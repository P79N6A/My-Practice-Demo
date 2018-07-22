import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render () {
    // console.log('tis.', this.props.todos)
    let todoList = this.props.todos.map(item => {
      return (
        <TodoItem
          text={item.text}
          key={item.id}
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