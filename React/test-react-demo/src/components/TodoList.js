import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onDeleteClick}) => {
  return (
    <div>
      {
        todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onDeleteClick={onDeleteClick}></TodoItem>
        ))
      }
    </div>
  )
}

export default TodoList