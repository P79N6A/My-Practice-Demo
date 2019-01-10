import React, { Component } from 'react'
import WrapWithLoadData from './wrapWithLoadData'

class TextWithContent extends Component {
  render () {
    return (
      <textarea value={this.props.data}></textarea>
    )
  }
}

export default WrapWithLoadData(TextWithContent, 'username')