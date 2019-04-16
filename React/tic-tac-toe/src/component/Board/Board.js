import React from 'react'
import Square from '../square/Square'
import './Board.css'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (index) {
    this.props.changePlayer()
    this.props.changeSquares(index)
  }

  render () {
    return (
      <div className="board">
        <div className="board-row">
          <Square value={this.props.squares[0]} index="0" onClick={this.handleClick}></Square>
          <Square value={this.props.squares[1]}  index="1" onClick={this.handleClick}></Square>
          <Square value={this.props.squares[2]}  index="2" onClick={this.handleClick}></Square>
        </div>
        <div className="board-row">
          <Square value={this.props.squares[3]}  index="3" onClick={this.handleClick}></Square>
          <Square value={this.props.squares[4]}  index="4" onClick={this.handleClick}></Square>
          <Square value={this.props.squares[5]}  index="5" onClick={this.handleClick}></Square>
        </div>
        <div className="board-row">
          <Square value={this.props.squares[6]}  index="6" onClick={this.handleClick}></Square>
          <Square value={this.props.squares[7]}  index="7" onClick={this.handleClick}></Square>
          <Square value={this.props.squares[8]}  index="8" onClick={this.handleClick}></Square>
        </div>
      </div>
    )
  }
}

export default Board