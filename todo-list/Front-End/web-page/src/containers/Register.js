import React from 'react'
import { Form, Input, Button, Icon} from 'antd';
import './register.css'

const FormItem = Form.Item

class LoginForm extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFields(
      (err, values) => {
        if (!err) {
          // 提交给后台 注册
          console.log('SUCCESS')
          // 成功后.. 返回登录的.. 把用户名密码返回过去
          
        }
      }
    )
  }

  goBack = () => {
    // 路由跳转
    console.log('thi', this.props)
    this.props.history.push('/login')
    // context.router.push(path)('/register')
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const rules = [
      {
        required: true,
        pattern: /^\w{4,20}$/,
        message: '请输入4-20位的字母或数字'
      }
    ]
    return (
      <Form layout="horizontal">
        <FormItem>
          {getFieldDecorator(
            'username',
            { rules }
          )(
            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator(
            'password',
            { rules }
          )(
            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="密码" type="password"/>
          )}
        </FormItem>
        <div className="operate-btn-container">
          <Button onClick={this.goBack}>返回</Button>
          <Button onClick={this.handleSubmit}>注册</Button>
        </div>
      </Form>
    )
  }
}

LoginForm = Form.create({})(LoginForm)

class Register extends React.Component {
  render () {
    return (
      <div className="login-contanter">
        <LoginForm {...this.props}></LoginForm>
      </div>
    )
  }
}

export default Register
