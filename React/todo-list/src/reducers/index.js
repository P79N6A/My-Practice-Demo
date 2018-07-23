import { combineReducers } from 'redux'
import { todo } from './todos'
import { filterVisible } from './filterVisible'
import { SET_VISIBILE } from '../actions/actionTypes'

const reducer = combineReducers({
  todos: todo,
  'SET_VISIBILE': filterVisible || SET_VISIBILE.SHOW_ALL
})

export default reducer