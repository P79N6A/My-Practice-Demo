import React from 'react'
import { Form, Input, Button, Icon } from 'antd';
import './login.css'

const FormItem = Form.Item

class LoginForm extends React.Component {
  render () {
    return (
      <Form layout="horizontal">
        <FormItem>
          <Input placeholder="用户名"/>
        </FormItem>
        <FormItem>
          <Input placeholder="密码"/>
        </FormItem>
        <div className="operate-btn-container">
          <Button>登录</Button>
          <Button>注册</Button>
        </div>
      </Form>
    )
  }
}

LoginForm = Form.create({})(LoginForm)

class Login extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const form = this.props.form
    console.log('form', form)
    return (
      <div className="login-contanter">
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default Login
