import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD': {
      console.log([...state, action.user])
      return [...state, action.user]
    }
    case 'DELETE':
      let newState = [...state]
      newState.splice(action.index, 1)
      return newState
    default:
      return state
  }
}

class User extends Component {  
  render () {
    const { user } = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={() => this.props.onButtonClick(this.props.index)}>删除</button>
      </div>
    )
  }
}

class UsersList extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      age: '',
      gender: ''
    }
  }
  
  handleInputChange (prop, e) {
    var value = e.target.value
    if (prop === 'age') value = parseInt(value)
    this.setState({
      [prop]: value
    })
  }
  
  
  render () {
    return (
      <div>
        {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
        <div className='add-user'>
          <div>Username: 
            <input type='text' 
              value={this.state.username}
              onChange={this.handleInputChange.bind(this, 'username')} />
          </div>
          <div>Age: 
            <input type='number' 
              value={this.state.value} 
              onChange={this.handleInputChange.bind(this, 'age')} />
          </div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' 
              onClick={this.handleInputChange.bind(this, 'gender')} /></label>
            <label>Female: <input type='radio' name='gender' value='female'
              onClick={this.handleInputChange.bind(this, 'gender')} /></label>
          </div>
          <button onClick={() => this.props.addUser(this.state)}>增加</button>
        </div>
        {/* 显示用户列表 */}
        <div className='users-list'>
          {this.props.userList.map(
            (user, index) => <User user={user} key={index} index={index} onButtonClick={this.props.deleteUser.bind(this)}/>)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    userList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch({
        type: 'ADD',
        user: user
      })
    },
    deleteUser: (index) => {
      dispatch({
        type: 'DELETE',
        index
      })
    }
  }
}

const store = createStore(usersReducer)
UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList)

ReactDOM.render(
  <Provider store={store}>
    <UsersList />
  </Provider>,
  document.getElementById('root')
)


