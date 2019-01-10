import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ComentInput from '../components/CommentInput'
import { addComment } from '../reducers/comment';

class CommentInputContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    comments: PropTypes.array
  }

  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  componentWillMount () {
    this._loadUsername()
  }

  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  saveUsername (username) {
    localStorage.setItem('username', username)
  }

  handleUsernameChange (username) {
    this.saveUsername(username)
    this._loadUsername()
  }

  handleSubmitComment (comment) {
    // 评论数据的验证
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    // 新增评论保存到 LocalStorage 中
    const { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    // this.props.onSubmit 是 connect 传进来的
    // 会 dispatch 一个 action 去新增评论
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  render () {
    return (
      <ComentInput
        username={this.state.username} 
        onUsernameBlur={(username) => this.saveUsername(username)}
        onUsernameChange={(username) => this.handleUsernameChange(username)} 
        onSubmit={(comment) => this.handleSubmitComment(comment)} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)
