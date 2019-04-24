import React, { Component } from 'react';
import posed from 'react-pose';

const Welcome = posed.h2({
  idle: { color: 'rgba(161, 0, 246, 1)' },
  hovered: { color: 'rgba(161, 0, 246, 0)' },
  transition: { duration: 700 }
});

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      hovering: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ playerName: event.target.value });
  }

  render() {
    return (
      <div>
        <Welcome
          pose={this.state.hovering ? 'hovered' : 'idle'}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        >
          Welcome
        </Welcome>
        <form>
          <label>Player Name:</label>
          <input
            type='text'
            value={this.state.playerName}
            onChange={this.handleNameChange}
          />
        </form>
        <button
          onClick={() =>
            console.log('A name was submitted: ' + this.state.playerName)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}
