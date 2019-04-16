import React, { Component } from 'react';
import './App.css';
import Board from './component/Board/Board.js';
import Record from './component/Record/Record';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      player: 'X',
      squares: [],
      winner: null
    }
    this.changePlayer = this.changePlayer.bind(this)
    this.changeSquares = this.changeSquares.bind(this)
  }
  changePlayer () {
    const player = this.state.player === 'X' ? 'O' : 'X'
    this.setState({
      player
    })
  }
  changeSquares (index) {
    if (this.hasWinner()) {
      return
    }
    let squares = this.state.squares
    squares[index] = this.state.player
    this.setState({
      squares
    })
  }

  hasWinner () {
    let squares = this.state.squares
    if (this.state.winner) {
      return
    }
    if (
        (squares[0] != undefined && squares[0] === squares[1] && squares[0] === squares[2])
        || (squares[3] != undefined && squares[3] === squares[4] && squares[3] === squares[5])
        || (squares[6] != undefined && squares[6] === squares[7] && squares[6] === squares[8])
        || (squares[0] != undefined && squares[0] === squares[3] && squares[0] === squares[6])
        || (squares[1] != undefined && squares[1] === squares[4] && squares[1] === squares[7])
        || (squares[2] != undefined && squares[2] === squares[5] && squares[2] === squares[8])
        || (squares[0] != undefined && squares[0] === squares[4] && squares[0] === squares[8])
        || (squares[2] != undefined && squares[2] === squares[4] && squares[2] === squares[6])
    ) {
      this.setState({
        winner: this.state.player
      })
      console.log('??')
      return true
    } else {
      return false
    }
  }
  render() {
    return (
      <div>
        <Board {...this.state} changePlayer={this.changePlayer} changeSquares={this.changeSquares}></Board>
        <Record {...this.state}></Record>
      </div>
    );
  }
}

export default App;
