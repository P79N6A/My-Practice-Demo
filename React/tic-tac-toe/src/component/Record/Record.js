import React from 'react'

class Record extends React.Component {
  render () {
    let result = null
    if (this.props.winner) {
      result = `winner: ${this.props.winner}`
    } else {
      result = `now player: ${this.props.player}`
    }
    return (
      <div>
        <p>{result}</p>
      </div>
    )
  }
}

export default Record