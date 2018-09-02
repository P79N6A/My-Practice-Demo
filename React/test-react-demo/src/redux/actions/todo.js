let todoId = 0

// action 常量
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

// action creator
function addTodo (obj) {
  console.log('obj', obj)
  console.log('action addTodo')
  return {
    payload: {
      ...obj, 
      id: todoId++
    },
    type: ADD_TODO
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

export {
  addTodo,
  deleteTodo
}
