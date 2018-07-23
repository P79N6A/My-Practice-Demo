import { SET_VISIBILE } from '../actions/actionTypes'

export const filterVisible = (state = SET_VISIBILE.SHOW_ALL, action) => {
  console.log('type', action.type)
  switch (action.type) {
    case SET_VISIBILE.SHOW_ALL: 
      return SET_VISIBILE.SHOW_ALL
    case SET_VISIBILE.SHOW_ACTIVE:
      return SET_VISIBILE.SHOW_ACTIVE
    case SET_VISIBILE.SHOW_COMPLETED:
      return SET_VISIBILE.SHOW_COMPLETED
    default:
      return state
  }
}