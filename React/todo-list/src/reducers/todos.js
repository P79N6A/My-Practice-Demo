import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

let todoId = 0

export const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: todoId++,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(item => {
        console.log('id', action.id)
        if (item.id === action.id) {
          return Object.assign({}, item, {
            completed: !item.completed
          })
        }
        return item
      })
    default:
      return state
  }
}