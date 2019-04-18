import React, { Component } from 'react';
import './App.css';
import Board from './component/Board/Board.js';
import Record from './component/Record/Record';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [{
        squares: new Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (index) {
    let history = this.state.history.slice(0, this.state.stepNumber + 1)
    let current = history[history.length-1]
    let squares = current.squares.slice()
    if (!squares[index] && !this.getWinner()) {
      squares[index] = this.state.xIsNext ? 'X' : 'O'
      this.setState({
        history: history.concat({
          squares
        }),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
      })
    }
  }
  
  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? false : true
    })
  }

  render() {
    let next = null
    let history = this.state.history
    let current = history[this.state.stepNumber]
    let winner = this.getWinner()
    if (winner) {
      next = `winner: ${winner}`
    } else {
      next = `next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    let btns = history.map((item, index) => {
      if (index === 0) {
        return  <li key={index} onClick={() => this.jumpTo(index)}><button>game start</button></li>
      }
      return <li key={index} onClick={() => this.jumpTo(index)}><button>move to step {index+1}</button></li>
    })

    return (
      <div>
        <Board squares={current.squares} onClick={this.handleClick}></Board>
        {/* <Record></Record> */}
        <div>
          {next}
          <ol>{btns}</ol>
        </div>
      </div>
    );
  }
  getWinner () {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    let history = this.state.history
    let squares = history[this.state.stepNumber].squares
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return false
  }
}

export default App;
