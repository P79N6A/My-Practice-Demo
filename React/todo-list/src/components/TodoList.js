import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render () {
    // console.log('tis.', this.props.todos)
    let todoList = this.props.todos.map(item => {
      // console.log('item', item)
      return (
        <TodoItem
          key={item.id}
          onItemClick={this.props.onItemClick}
          {...item}
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