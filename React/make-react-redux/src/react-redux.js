import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
      super()
      this.state = {
        allProps: {}
      }
    }

    componentWillMount () {
      const { store } = this.context
      this._updateAllProps()
      store.subscribe(() => this._updateAllProps())
    }

    _updateAllProps () {
      const { store } = this.context
      let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}
      console.log(dispatchProps)
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render () {
      return (
        <WrapperComponent {...this.state.allProps}/>
      )
    }
  }
  return Connect
}

export class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  
  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}