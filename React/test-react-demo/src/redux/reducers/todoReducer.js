const todoReducer = (state = [], action) => {
  var newState = []
  switch (action.type) {
    case 'ADD_TODO': {
      newState.push(...state, action.payload)
      return newState
    }
    case 'DELETE_TODO': {
      newState = state.filter((todo) => todo.id !== action.id)
      return newState
    }
    default:
      return state
  }
}

export default todoReducer