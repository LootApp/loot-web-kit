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
    getRef: PropTypes.func
  };

  static defaultProps = {
    getRef: null
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onBlur = value => {
    if (!!value.length && !isValidEmail(value))
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
