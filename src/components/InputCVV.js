import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";

const SInput = styled(Input)`
  width: 100%;
`;

class InputCVV extends Component {
  static propTypes = {
    required: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    required: false,
    onChange: null
  };

  _onBlur = ({ target }) => {
    if (!target) return null;
    if (target.value.length && target.value) {
      if (this.props.required && !target.value.length) {
        this.input.setState({
          error: true,
          helperText: "This field is required"
        });
      } else if (target.value.length < 3) {
        this.input.setState({
          error: true,
          helperText: "CVV has 3 digits"
        });
      }
    }
  };

  _onChange = value => {
    const formatedValue = value.toString().replace(/[^0-9-]/g, "");
    !!this.props.onChange && this.props.onChange(formatedValue);
    return formatedValue;
  };

  render() {
    const { required, ...props } = this.props;
    return (
      <SInput
        {...props}
        noValidate
        onChange={this._onChange}
        maxLength={3}
        required={required}
        onBlur={this._onBlur}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputCVV;
