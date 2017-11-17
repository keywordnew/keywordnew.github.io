import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <h1>Hello Class Component</h1>
        <p>current: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </div>
    )
  }
}

export default Counter
