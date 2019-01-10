import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  constructor () {
    super()
    this.state = {
      timeString: ''
    }
  }

  componentWillMount () {
    this._updateCommentsDate()
    this._timer = setInterval(this._updateCommentsDate.bind(this), 5000)
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }

  // 更新 comments 的显示时间
  _updateCommentsDate () {
    const now = new Date()
    console.log(this.props)
    const duration = (now - this.props.comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60 ? 
        Math.floor(duration / 60) + '分钟前' :
        Math.floor(duration) + '秒前'
    })
  }

  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>').replace(/`([\s\S]+?)`/g, '<code>$1</code>')
  }

  handleDeleteComment () {
    this.props.onDeleteComment(this.props.index)
  }

  render () {
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}</span>：
        </div>
        <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(this.props.comment.content)}}></p>
        <span className="comment-createdtime">{this.state.timeString}</span>
        <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
          删除
        </span>
      </div>
    )
  }
}

export default Comment
