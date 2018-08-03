import React from 'react'
import { Button, Tabs, Form, Icon, Input, Message } from 'antd'
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
        .then(res => {
          if (res.data.success) {
            // 注册成功
            Message.success('注册成功')
          } else {
            // 注册失败
            Message.error('用户名已存在')
          }
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
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.toggleTab = this.toggleTab.bind(this)
    this.state = {
      activeKey: 'login'
    }
  }
  handleChange (activeKey) {
    this.toggleTab()
  }
  toggleTab () {
    this.setState({
      activeKey: this.state.activeKey === 'login' ? 'register' : 'login'
    })
  }
  render () {
    return (
      <Tabs activeKey={this.state.activeKey} onChange={this.handleChange} className="tab-content">
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