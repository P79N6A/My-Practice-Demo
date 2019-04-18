import React from 'react'
import Square from '../Square/Square'
import './Board.css'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.renderSquare = this.renderSquare.bind(this)
  }
  renderSquare (index) {
    return (
      <Square value={this.props.squares[index]} onClick={this.props.onClick} index={index}></Square>
    )
  }
  render () {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board