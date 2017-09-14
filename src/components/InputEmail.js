import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input";
import isValidEmail from "../utilities/isValidEmail";

const SInput = styled(Input)`
  flex-grow: 1;
`;

class InputEmail extends Component {
  _onBlur = elm => {
    if (!!elm.value.length && !isValidEmail(elm.value))
      this.input.setState({
        error: true,
        helperText: "Invalid email address!"
      });
  };

  render() {
    return (
      <SInput
        {...this.props}
        type="email"
        noValidate
        onBlur={this._onBlur}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputEmail;
