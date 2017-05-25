import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input";
import formatSortcode from "../utilities/formatSortcode";

const SInput = styled(Input)`
  flex-grow: 1;
`;

class InputSortcode extends Component {
  _onChange = value => formatSortcode(value);

  _value = () => this.input._value();

  render() {
    return (
      <SInput
        {...this.props}
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
