import React from 'react'
import Input from '../containers/Input'
import VisibleTodoList from '../containers/VisibileTodoList';

class App extends React.Component {
  render () {
    return (
      <div>
        <Input />
        <VisibleTodoList />
      </div>
    )
  }
}

export default App
