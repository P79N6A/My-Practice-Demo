import { combineReducers } from 'redux'
import testReducer from './testReducer'
import todoReducer from './todoReducer'

export default combineReducers({
  test: testReducer,
  todos: todoReducer
})
