import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";

const SInput = styled(Input)`
  width: 100%;
`;

class InputAccountNumber extends Component {
  static propTypes = {
    getRef: PropTypes.func,
    required: PropTypes.bool
  };

  static defaultProps = {
    getRef: null,
    required: false
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onBlur = ({ target }) => {
    if (target.value.length && target.value) {
      if (this.props.required && !target.value.length) {
        this.input.setState({
          error: true,
          helperText: "This field is required"
        });
      } else if (target.value.length < 8) {
        this.input.setState({
          error: true,
          helperText: "Account number has 8 digits"
        });
      }
    }
  };

  _onChange = value => value.toString().replace(/[^0-9-]/g, "");

  _value = () => this.input._value();

  render() {
    const { required, ...props } = this.props;
    return (
      <SInput
        {...props}
        noValidate
        onChange={this._onChange}
        maxLength={8}
        required={required}
        onBlur={this._onBlur}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputAccountNumber;
