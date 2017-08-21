import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import stringFormatter from "../utilities/stringFormatter";
import formatLength from "../utilities/formatLength";

const SInput = styled(Input)`
  width: 100%;
`;

class InputFormat extends Component {
  static propTypes = {
    getRef: PropTypes.func,
    label: PropTypes.string.isRequired,
    requiredChar: PropTypes.number,
    numbersOnly: PropTypes.bool,
    delimiter: PropTypes.string,
    occurance: PropTypes.number,
    required: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    getRef: null,
    requiredChar: 9999,
    numbersOnly: false,
    delimiter: "",
    occurance: 0,
    required: false,
    onChange: null
  };

  state = {
    maxLength: formatLength(this.props.requiredChar, this.props.occurance) || 0
  }

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
      } else if (this.state.maxLength !== 9999 && target.value.length < this.state.maxLength) {
        this.input.setState({
          error: true,
          helperText: `${this.props.label} needs ${this.props.requiredChar} ${this.props.numbersOnly
            ? "digits"
            : "characters"}`
        });
      }
    }
  };

  _onChange = value => {
    const formatedValue = stringFormatter({
      value: this.props.numbersOnly ? value.toString().replace(/[^0-9-]/g, "") : value,
      delimiter: this.props.delimiter,
      occurance: this.props.occurance
    }).substr(0, this.state.maxLength);
    typeof this.props.onChange === "function" && this.props.onChange(formatedValue);
    return formatedValue;
  };

  render() {
    const { label, required, onChange, ...props } = this.props;
    return (
      <SInput
        {...props}
        noValidate
        label={label}
        required={required}
        onBlur={this._onBlur}
        maxLength={this.state.maxLength}
        onChange={this._onChange}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputFormat;
