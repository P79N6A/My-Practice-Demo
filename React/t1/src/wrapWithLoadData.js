import React, { Component } from 'react'

const WrapWithLoadData  = (WrapComponent, prop) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount () {
      let data = localStorage.getItem(prop)
      this.setState({
        data: data
      })
    }

    render () {
      return <WrapComponent data={this.state.data} />
    }
  }

  return NewComponent
}

export default WrapWithLoadData
