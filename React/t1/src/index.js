import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TextWithContent from './textWithContent'
import App from './ContextTest'
// import UserTest from './User'

class Title extends Component {
  handleClick (arg, e) {
    console.log(e.target.innerHTML)
    console.log(this)
    console.log(arg)
  }
  render () {
    return (
      <h1 onClick={this.handleClick.bind(this, 'miss u')}>This is a title</h1>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <Title />
      </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <div>
        <h2>This is main content</h2>
      </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      <div>
        <h3>This is a footer</h3>
      </div>
    )
  }
}

// class Index extends Component {
//   render () {
//     const users = [
//       { username: 'Jerry', age: 21, gender: 'male' },
//       { username: 'Tomy', age: 22, gender: 'male' },
//       { username: 'Lily', age: 19, gender: 'female' },
//       { username: 'Lucy', age: 20, gender: 'female' }
//     ]

//     return (
//       <div>
//         {/* <LikeButton 
//           likedText='已赞'
//           unlikedText='赞'
//           onClick={() => console.log('hhh')}  
//         /> */}
//         {users.map((user, index) => (
//           <User user={user} key={index}/>
//         ))}
//       </div>
//     )
//   }
// }

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名: {user.username}</div>
        <div>年龄: {user.age}</div>
        <div>性别: {user.gender}</div>
        <hr />
      </div>
    )
  }
}

// class LikeButton extends Component {
//   static defaultProps = {
//     likedText: '取消',
//     unlikedText: '点赞'
//   }

//   constructor (props) {
//     super(props)
//     this.state = {
//       isLike: false
//     }
//   }
//   handleClick () {
//     this.setState({
//       isLike: !this.state.isLike
//     })
//     if (this.props.onClick) {
//       this.props.onClick()
//     }
//   }
//   render () {
//     return (
//       <button onClick={this.handleClick.bind(this)}>
//         {this.state.isLike ? this.props.likedText : this.props.unlikedText} 👍
//       </button>
//     )
//   }
// }

// class Lesson extends Component {
//   handleClick () {
//     console.log(`${index} - ${lesson.title}`)
//   }
  
//   render () {
//     const { lesson } = this.props
//     const { index } = this.props
    
//     return (
//       <div onClick={this.handleClick.bind(this)}>
//         <h1>{lesson.title}</h1>
//         <p>{lesson.descript}</p>
//       </div>  
//     )
//   }
// }

// class LessonsList extends Component {
//   render () {
//     const { lessons } = this.props
    
//     return (
//       <div>
//         {lessons.map((lesson, index) => (<Lesson lesson={lesson} key={index} index={index} />))}
//       </div>
//     )
//   }
// }

// class Input extends Component {
//   handleChange (e) {
//     const inputText = e.target.value
//     if (this.props.onChange) {
//       this.props.onChange(inputText)
//     }
//   }
//   render () {
//     return (
//       <div>
//         <input type='number' value={this.props.inputText} onChange={this.handleChange.bind(this)}/>
//       </div>
//     )
//   }
// }

// class PercentageShower extends Component {
//   changePercentage (inputText) {
//     if (typeof +inputText == 'number') {
//       return (inputText * 100).toFixed(2) + '%'
//     }
//   }
//   render () {
//     return (
//       <div>{this.changePercentage(this.props.inputText)}</div>
//     )
//   }
// }

// class PercentageApp extends Component {
//   constructor () {
//     super()
//     this.state = {
//       inputText: ''
//     }
//   }

//   handleInputChange (inputText) {
//     this.setState({
//       inputText: inputText
//     })
//   }

//   render () {
//     return (
//       <div>
//         <Input inputText={this.state.inputText} onChange={this.handleInputChange.bind(this)}/>
//         <PercentageShower inputText={this.state.inputText}/>
//       </div>
//     )
//   }
// }

// class Clock extends Component {
//   constructor () {
//     super()
//     this.state = {
//       date: new Date()
//     }
//   }

//   componentWillMount () {
//     this.timer = setInterval(() => {
//       this.setState({
//         date: new Date()
//       })
//     }, 1000)
//   }

//   componentWillUnmount () {
//     clearInterval(this.timer)
//   }

//   render () {
//     return (
//       <div>
//         <h1>现在的时间是：</h1>
//         <p>{this.state.date.toLocaleTimeString()}</p>
//       </div>
//     )
//   }
// }

// class Index extends Component {
//   constructor () {
//     super()
//     this.state = {
//       isShow: true
//     }
//   }

//   handleClick () {
//     this.setState({
//       isShow: !this.state.isShow
//     })
//   }

//   render () {
//     return (
//       <div>
//         {this.state.isShow ? <Clock /> : null}
//         <button onClick={this.handleClick.bind(this)}>{this.state.isShow ? '隐藏' : '显示'}</button>
//       </div>
//     )
//   }
// }

// class AutoFocusInput extends Component {
//   constructor () {
//     super()
//   }

//   componentDidMount () {
//     console.log(this.input)
//     this.input.focus()
//   }

//   render () {
//     return (
//       <input ref={(input) => this.input = input}/>
//     )
//   }
// }

// class Card extends Component {
//   handleClick () {
//     console.log(this.props.children)
//   }
//   render () {
//     return (
//       <div>
//         {this.props.children}
//         <button onClick={this.handleClick.bind(this)}></button>
//       </div>
//     )
//   }
// }

// class Index extends Component {
//   render () {
//     return (
//       <Card>
//         <div>
//           怎么去拥有一道彩虹
//         </div>
//         <div>
//           <p>怎么去拥抱一夏天的风</p>
//           {/* <div>
//             <p>如果你快乐不是为我</p>
//           </div> */}
//         </div>
//       </Card>
//     )
//   }
// }

// class Index extends Component {
//   constructor () {
//     super()
//     this.state = {
//       content: '<h1>almost lover</h1>'
//     }
//   }

//   render () {
//     return (
//       <div dangerouslySetInnerHTML={{__html: this.state.content}}>
//       </div>
//     )
//   }
// }

// class Comment extends Component {
//   static propTypes = {
//     comment: PropTypes.object.isRequired
//   }
//   render () {
//     // const { comment } = this.props
//     return (
//       <div className='comment'>
//         <div className='comment-user'>
//           <span>{this.props.comment.username} </span>：
//         </div>
//         <p>{this.props.comment.content}</p>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
