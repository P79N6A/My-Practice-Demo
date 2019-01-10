import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  handleDeleteComment (index) {
    this.props.onDeleteComment(index)
  }
  
  render () {
    // // 测试数据
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]
    const comments = this.props.comments
    return (
      <div className="comment-list">
        {comments.map((comment, index) => 
          <Comment 
            comment={comment} 
            key={index} 
            index={index}
            onDeleteComment={this.handleDeleteComment.bind(this)}  
          />
        )}
      </div>
    )
  }
}

export default CommentList
