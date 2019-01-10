import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'  
import WrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: props.data
    }
  }

  // componentWillMount () {
  //   this._loadComments()
  // }

  // // 加载 comments
  // _loadComments () {
  //   const comments = localStorage.getItem('comments')
  //   if (comments) {
  //     console.log(JSON.parse(comments))
  //     this.setState({
  //       comments: JSON.parse(comments)
  //     })
  //   }
  // }

  // 保存 comments 到 localstorage
  // _saveComments (comments) {
  //   localStorage.setItem('comments', JSON.stringify(comments))
  //   this.setState({
  //     comments: comments
  //   })
  // }

  handleCommentSubmit (state) {
    const comments = this.state.comments
    comments.push(state)
    this.props.saveData(comments)
    this.setState({comments})
  }

  handleDeleteComment (index) {
    let comments = this.state.comments
    comments.splice(index, 1)
    this.props.saveData(comments)
    this.setState({comments})
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleCommentSubmit.bind(this)}/>
        <CommentList comments={this.props.data || []} onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
    )
  }
}

export default WrapWithLoadData(CommentApp, 'comments')
