import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { historyPush, historyReplace } from './Route'

export class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    require: PropTypes.bool
  }

  handleClick (e) {
    const { to, require } = this.props
    // 阻止默认跳转
    e.preventDefault()
    // url 跳转
    require ? historyReplace(to) : historyPush(to)
  }

  render () {
    const { to } = this.props
    return (
      <div>
        <a onClick={this.handleClick.bind(this)} href={to}>{to}</a>
      </div>
    )
  }
}
