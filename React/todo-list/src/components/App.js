import React from 'react'
import Input from '../containers/Input'
import VisibleTodoList from '../containers/VisibileTodoList';
import FooterButton from '../containers/SetVisibile'

class App extends React.Component {
  render () {
    return (
      <div>
        <Input />
        <VisibleTodoList />
        <FooterButton />
      </div>
    )
  }
}

export default App
