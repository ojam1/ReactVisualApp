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
      hovering: false
    };
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
      </div>
    );
  }
}
