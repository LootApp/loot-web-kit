import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import stringFormatter from "../utilities/stringFormatter";

const SInput = styled(Input)`
  width: 100%;
`;

class InputSortCode extends Component {
  static propTypes = {
    getRef: PropTypes.func,
    required: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    getRef: null,
    required: false,
    onChange: null
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onBlur = ({ target }) => {
    if (!target) return null;
    if (target.value.length && target.value) {
      if (this.props.required && !target.value.length) {
        this.input.setState({
          error: true,
          helperText: "This field is required"
        });
      } else if (target.value.length < 8) {
        this.input.setState({
          error: true,
          helperText: "Sort code has 6 digits"
        });
      }
    }
  };

  _onChange = value => {
    const formatedValue = stringFormatter({
      value: value.toString().replace(/[^0-9-]/g, ""),
      delimiter: "-",
      occurance: 2
    });
    typeof this.props.onChange === "function" && this.props.onChange(formatedValue);
    return formatedValue;
  };

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

export default InputSortCode;