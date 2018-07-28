import React from 'react'
import { Button, Tabs, Form, Icon, Input } from 'antd'
import './login.css'
import _axios from '../utils/axios.js'
import api from '../api/index'

const { TabPane } = Tabs
const FormItem = Form.Item

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        _axios({
          url: api.LOGIN,
          method: 'post',
          data: values
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码" 
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">登录</Button>
          <Button>注册</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create()(LoginForm)

class RegisterForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        _axios({
          url: api.REGISTER,
          method: 'post',
          data: values
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form className="register-form" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码" 
            />
          )}
        </FormItem>
        <FormItem>
          <Button htmlType="submit">注册</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedRegisterForm = Form.create()(RegisterForm)

class Login extends React.Component {
  handleChange (activeKey) {
    console.log(activeKey)
  }
  render () {
    return (
      <Tabs defaultActiveKey="login" onChange={this.handleChange} className="tab-content">
        <TabPane tab="登录" key="login">
          <WrappedLoginForm />
        </TabPane>
        <TabPane tab="注册" key="register">
          <WrappedRegisterForm />
        </TabPane>
      </Tabs>
    )
  }
}

export default Login