import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';

class WebKitConfig extends Component {
  // -- prop validation ----------------------------------------------------- //
  state = {
    text: ''
  }

  _onChange = value => this.setState({ text: value });

  render() {
    return (
      <Input type="text" label="text" name="name" value={this.state.text} onChange={this._onChange} />
    );
  }
}

export default WebKitConfig;
