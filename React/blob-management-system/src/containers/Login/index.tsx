import React from 'react'
import { Form, Input, Button, Icon } from 'antd'
import { login } from '../../services/index'
import './index.css'

interface FormProps {
  form?: object
}

class LoginForm extends React.Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any , values: object) => {
      if (!err) {
        console.log(values);
        // login().then(data => {
        //   // 跳转到那个啥
        // }).catch(err => err);
      }
    })
  }
  render () {
    const { form: {getFieldDecorator} } = this.props;
    return (
      <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {})(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0.25)'}}/>}
              placeholder="username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {})(
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0.25)'}} />}
              placeholder="password"
              type="password"
            />
          )}
        </Form.Item>
        <Button type="primary" onClick={this.handleSubmit} className="login-form-btn">登陆</Button>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create({})(LoginForm);

export default WrappedLoginForm;