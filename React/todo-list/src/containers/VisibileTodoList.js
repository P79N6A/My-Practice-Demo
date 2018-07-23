// import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList';
import { SET_VISIBILE } from '../actions/actionTypes'
import { toggleTodo } from '../actions/todos'

const filterTodo = (todos, visibile) => {
  console.log('visible', visibile)
  switch (visibile) {
    case SET_VISIBILE.SHOW_ALL:
      return todos
    case SET_VISIBILE.SHOW_ACTIVE:
      return todos.filter(todo => {
        return !todo.completed
      })
    case SET_VISIBILE.SHOW_COMPLETED:
      return todos.filter(todo => {
        return todo.completed
      })
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: filterTodo(state.todos, state.SET_VISIBILE)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {console.log('test')},
    onItemClick: (id) => {
      console.log('iiid', id)
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList