import React from 'react'
import { SET_VISIBILE } from '../actions/actionTypes';

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.forbid = SET_VISIBILE.SHOW_ALL
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (filter) {
    // let target = e.target
    // console.log('filter', target)
    this.forbid = filter
    this.props.onClick(filter)
  }

  render () {
    return (
      <div>
        <button disabled={SET_VISIBILE.SHOW_ALL === this.forbid} onClick={() => this.handleClick(SET_VISIBILE.SHOW_ALL)}>all</button>
        <button disabled={SET_VISIBILE.SHOW_ACTIVE === this.forbid} onClick={() => this.handleClick(SET_VISIBILE.SHOW_ACTIVE)}>active</button>
        <button disabled={SET_VISIBILE.SHOW_COMPLETED === this.forbid} onClick={() => this.handleClick(SET_VISIBILE.SHOW_COMPLETED)}>completed</button>
      </div>
    )
  }
}

export default Footer