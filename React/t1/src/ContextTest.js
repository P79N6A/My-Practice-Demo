import React, { Component } from 'react'
import PropTypes from 'prop-types'

// class Index extends Component {
//   static childContextTypes = {
//     themeColor: PropTypes.string
//   }

//   constructor () {
//     super()
//     this.state = { themeColor: 'red', text: '' }
//   }

//   getChildContext () {
//     return { themeColor: this.state.themeColor }
//   }

//   handleClick () {
//     this.setState({
//       text: 123
//     })
//   }

//   render () {
//     return (
//       <div onClick={this.handleClick.bind(this)}>
//         <Header />
//         <Main />
//       </div>
//     )
//   }
// }

// class Header extends Component {
//   render () {
//     return (
//     <div>
//       <h2>This is header</h2>
//       <Title />
//     </div>
//     )
//   }
// }

// class Main extends Component {
//   render () {
//     return (
//     <div>
//       <h2>This is main</h2>
//       <Content />
//     </div>
//     )
//   }
// }

// class Title extends Component {
//   static contextTypes = {
//     themeColor: PropTypes.string
//   }

//   render () {
//     console.log(this.context)
//     return (
//       <h1 style={{color: this.context.themeColor}}>React.js 小书标题</h1>
//     )
//   }
// }

// class Content extends Component {
//   render () {
//     return (
//     <div>
//       <h2>React.js 小书内容</h2>
//     </div>
//     )
//   }
// }

class App extends Component {
  constructor () {
    super()
    console.log('constructor')
    this.state = {
      text: 0
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    return null
    // return {
    //   text: prevState.text + 10
    // }
  }

  componentDidMount () {
    console.log('mount')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdata')
    return true
  }

  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('unmount')
  }

  handleDivClick () {
    console.log('div bubble click')
  }
  handleDivCapture () {
    console.log('div capture click')
  }
  handleSpanClick () {
    this.setState((state) => {
      setTimeout(() => {
        this.setState({
          text: this.state.text + 2
        })
      }, 0)

      return {
        text: state.text + 3
      }
    })
    // this.setState((state) => {
    //   return {text: state.text + 10}
    // })
    // this.setState({
    //   text: this.state.text + 3
    // })
  }
  handleInputBlur () {
    console.log('blur')
  }
  render () {
    console.log('render')
    
    return (
      <div onClick={this.handleDivClick.bind(this)} onClickCapture={this.handleDivCapture.bind(this)} key={'haha'}>
        <span onClick={this.handleSpanClick.bind(this)} >{this.state.text}</span>
        带我走...
        <div>
          <p>Wonderful u.</p>
        </div>
        {/* <input onBlur={this.handleInputBlur.bind(this)} /> */}
      </div>
    )
  }
}

export default App