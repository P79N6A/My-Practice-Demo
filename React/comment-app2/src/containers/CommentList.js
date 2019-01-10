import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initComments, deleteComment } from '../reducers/comment';
import CommentList from '../components/CommentList'
import PropTypes from 'prop-types'

class CommentListContainer extends Component {
  static propTypes = {
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func,
    comments: PropTypes.array
  }

  componentWillMount () {
    this._loadComments()
  }

  // 获取 comments
  // 这个 comments 其实有点东西的
  // 虽然说会从 localstorage 中获取 comments
  // 但是并不直接拿来用，要把它放到 state 中
  // 再从 state 中取得
  // 其实我觉得，这个 comments 也可以放在父组件的吧？
  // 不过呢，这样好像就和用 redux 之前没区别了hhh
  // 感觉 redux 是在需要的时候才用的
  // 就是说，一个状态，在多个组件用到 u.u
  _loadComments () {
    // 从 localstorage 中获取，并存到 store 中
    let comments = localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    // 初始化 comment state
    this.props.initComments(comments)
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleDeleteComment (commentIndex) {
    // 修改 localstorage
    // props 不可以改，所以要弄个新的
    const { comments } = this.props
    console.log(comments)
    const newComments = [
      ...comments.slice(0, commentIndex),
      ...comments.slice(commentIndex + 1)
    ]
    this._saveComments(newComments)
    // 修改 state（其实我觉得这步，可以不修改，重新 loadComments 就可以了
    // 修改的话可以减少请求，但是如果多人操作的话，可能就不同步了吧？（不清楚呀我再想想）
    this.props.onDeleteComment(commentIndex)
  }

  render () {
    
    return <CommentList 
      comments={this.props.comments} 
      onDeleteComment={(commentIndex) => this.handleDeleteComment(commentIndex)} />
  }
}

const mapStateToProps = (state) => {
  console.log(state.comments)
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments))
    },
    onDeleteComment: (commentIndex) => {
      dispatch(deleteComment(commentIndex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)