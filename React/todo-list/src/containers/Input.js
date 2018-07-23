import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleAdd () {
    if (this.state.text === '') {
      return
    }
    this.setState({
      text: ''
    })
    this.props.dispatch(addTodo(this.state.text))
  }

  handleChange (e) {
    let target = e.target
    // console.log('target', target)
    this.setState({
      text: target.value
    })
  }

  render () {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.handleAdd}>添加</button>
      </div>
    )
  }
}

const input = connect()(Input)

export default input