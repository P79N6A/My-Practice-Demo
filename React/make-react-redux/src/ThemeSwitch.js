import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class ThemeSwitch extends Component {
  // static PropTypes = {
    
  // }

  handleRedButtonClick () {
    this.props.onColorButtonClick('red')
  }

  handleBlueButtonClick () {
    this.props.onColorButtonClick('blue')
  }

  render () {
    return (
      <div>
        <button style={{ color: this.props.themeColor }} onClick={ this.handleRedButtonClick.bind(this) }>Red</button>
        <button style={{ color: this.props.themeColor }} onClick={ this.handleBlueButtonClick.bind(this) }>Blue</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onColorButtonClick: (color) => dispatch({ type: 'CHANGE_RED', themeColor: color}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
