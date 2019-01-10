import React, { Component } from 'react'
import WrapWithLoadData from './wrapWithLoadData'

class CommentInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: props.data,
      content: ''
    }
  }

  // componentWillMount () {
  //   // 从 localstorage 中获取上次评论的用户名
  //   // 并填到用户名输入框中
  //   const username = localStorage.getItem('username')
  //   if (username) {
  //     this.setState({
  //       username: username
  //     })
  //   }
  // }

  componentDidMount () {
    // 自动聚焦到评论框上
    // 如果还没有姓名就聚焦到姓名上
    if (!this.username) {
      this.username.focus()
    } else {
      this.content.focus()
    }
  }

  handleNameOnBlur (e) {
    // 添加当前评论的用户名到 localstorage 中
    // localStorage.setItem('username', e.target.value)
    this.props.saveData(e.target.value)
  }

  handleNameChange (e) {
    const username = e.target.value
    this.setState({
      username: username
    })
  }

  handleContentChange (e) {
    const content = e.target.value
    this.setState({
      content: content
    })
  }

  handleSubmit () {
    // 判断姓名、评论内容是否为空
    if (!this.state.username) {
      alert('姓名不能为空')
      return
    }
    if (!this.state.content) {
      alert('评论内容不能为空')
      return
    }

    // 发布。调用父组件方法
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content,
        createdTime: +new Date()
      })
    }
    
    // 清空评论内容
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className="comment-input">
        {/* 用户名 */}
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input onChange={this.handleNameChange.bind(this)} value={this.state.username} 
              ref={(username) => this.username = username}
              onBlur={this.handleNameOnBlur.bind(this)}/>
          </div>
        </div>
        {/* 评论内容 */}
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea onChange={this.handleContentChange.bind(this)} value={this.state.content}
              ref={(content => this.content = content)}></textarea>
          </div>
        </div>
        {/* 按钮 */}
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}

export default WrapWithLoadData(CommentInput, 'username')
