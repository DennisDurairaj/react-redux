import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  changeMessage(input) {
    console.log(input.target.value);
    this.setState({
      message: input.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <input onChange={input => this.changeMessage(input)} type="text" />
      </div>
    )
  }
}

export default App;
