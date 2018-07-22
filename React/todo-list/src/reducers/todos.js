import { ADD_TODO } from "../actions/actionTypes";

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
    default:
      return state
  }
}