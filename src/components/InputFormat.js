import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import stringFormatter from "../utilities/stringFormatter";

const SInput = styled(Input)`
  width: 100%;
`;

class InputFormat extends Component {
  static propTypes = {
    getRef: PropTypes.func,
    numbersOnly: PropTypes.bool,
    delimiter: PropTypes.string,
    occurance: PropTypes.number,
    maxLength: PropTypes.number,
    required: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    getRef: null,
    numbersOnly: false,
    delimiter: "",
    occurance: 0,
    maxLength: 9999,
    required: false,
    onChange: null
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onBlur = ({ target }) => {
    if (!target) return null;
    const minChar = this.props.occurance
      ? this.props.maxLength - (this.props.occurance - this.props.maxLength % this.props.occurance)
      : this.props.maxLength;
    if (target.value.length && target.value) {
      if (this.props.required && !target.value.length) {
        this.input.setState({
          error: true,
          helperText: "This field is required"
        });
      } else if (this.props.maxLength !== 9999 && target.value.length < this.props.maxLength) {
        this.input.setState({
          error: true,
          helperText: `Minimum ${minChar} characters`
        });
      }
    }
  };

  _onChange = value => {
    const formatedValue = stringFormatter({
      value: this.props.numbersOnly ? value.toString().replace(/[^0-9-]/g, "") : value,
      delimiter: this.props.delimiter,
      occurance: this.props.occurance
    });
    !!this.props.onChange && this.props.onChange(formatedValue);
    return formatedValue;
  };

  render() {
    const { maxLength, required, onChange, ...props } = this.props;
    return (
      <SInput
        {...props}
        noValidate
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
