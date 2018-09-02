import React from 'react'
// import { connect } from 'react-redux'

class TodoInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '33'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange (e) {
    let target = e.target
    this.setState({
      inputValue: target.value
    })
  }
  handleClick () {
    this.props.onClick(this.state.inputValue)
  }
  render () {
    return (
      <div>
        <input placeholder="请输入内容" value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}

export default TodoInput