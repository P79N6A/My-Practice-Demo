import { createStore } from 'redux'
// import state from './state'
import reducer from '../reducers/index'

const store = createStore(reducer)

export default store