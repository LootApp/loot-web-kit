import React, { Component } from "react";
import Input from "./Input";
import formatSortcode from "../utilities/formatSortcode";

class InputSortcode extends Component {
  _onChange = value => formatSortcode(value);

  _value = () => this.input._value();

  render() {
    const { ...props } = this.props;
    return (
      <Input
        {...props}
        type="tel"
        noValidate
        maxLength={8}
        onChange={this._onChange}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputSortcode;
