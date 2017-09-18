import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "./Input";
import isValidEmail from "../utilities/isValidEmail";

const SInput = styled(Input)`
  flex-grow: 1;
`;

class InputEmail extends Component {
  static propTypes = {
    onBlur: PropTypes.func
  };

  static defaultProps = {
    onBlur: null
  };

  _onBlur = elm => {
    let valueObj = elm;
    if (!!elm.value.length && !isValidEmail(elm.value)) {
      this.input.setState({
        error: true,
        helperText: "Invalid email address!"
      });
      valueObj = { ...elm, error: true };
    }
    typeof this.props.onBlur === "function" && this.props.onBlur(valueObj);
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
