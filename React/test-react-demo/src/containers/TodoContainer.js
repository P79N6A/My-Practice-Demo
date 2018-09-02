import React from 'react'
import TodoInput from './TodoInput'
import TodoList from '@/components/TodoList'
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '@/redux/actions/todo'

class TodoContainer extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    let { handleDelete, addTodo } = this.props
    return (
      <div>
        <TodoInput onClick={addTodo}></TodoInput>
        <TodoList {...this.props} onDeleteClick={handleDelete}></TodoList>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('own', ownProps)
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => {
      var obj = {
        text: value,
        time: '这里是日期'
      }
      // 添加到 redux 中
      dispatch(addTodo(obj))
    },
    handleDelete: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoContainer)

export default TodoContainer