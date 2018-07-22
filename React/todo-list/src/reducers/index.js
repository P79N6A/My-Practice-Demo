import { combineReducers } from 'redux'
import { todo } from './todos'

const reducer = combineReducers({
  todos: todo
})

export default reducer