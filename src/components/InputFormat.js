import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import stringFormatter from "../utilities/stringFormatter";
import formatLength from "../utilities/formatLength";

const SInput = styled(Input)`width: 100%;`;

class InputFormat extends Component {
  static propTypes = {
    getRef: PropTypes.func,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    delimiter: PropTypes.string,
    occurance: PropTypes.number,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    getRef: null,
    maxLength: 0,
    delimiter: "",
    occurance: 0,
    required: false,
    onChange: null,
    onBlur: null
  };

  state = {
    requiredChar: formatLength(this.props.maxLength, this.props.occurance, this.props.delimiter)
  };

  _onBlur = elm => {
    let valueObj = elm;
    if (!elm) return null;
    if (elm.value.length && elm.value) {
      if (this.props.required && !elm.value.length) {
        this.input.setState({
          error: true,
          helperText: "This field is required"
        });
        valueObj = { ...elm, error: true };
      } else if (this.props.maxLength && elm.value.length < this.props.maxLength) {
        this.input.setState({
          error: true,
          helperText: `${this.props.label} needs ${this.state.requiredChar} digits`
        });
        valueObj = { ...elm, error: true };
      }
    }
    typeof this.props.onBlur === "function" && this.props.onBlur(valueObj);
  };

  _onChange = value => {
    const formatedValue = stringFormatter({
      value: value.toString().replace(/[^0-9-]/g, ""),
      delimiter: this.props.delimiter,
      occurance: this.props.occurance
    });
    typeof this.props.onChange === "function" && this.props.onChange(formatedValue);
    return formatedValue;
  };

  render() {
    const { maxLength, label, required, onChange, delimiter, occurance, ...props } = this.props;
    return (
      <SInput
        {...props}
        noValidate
        label={label}
        required={required}
        onBlur={this._onBlur}
        maxLength={maxLength}
        onChange={this._onChange}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputFormat;
