import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import stringFormatter from "../utilities/stringFormatter";

const SInput = styled(Input)`
  width: 100%;
`;

class InputExpDate extends Component {
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
    if (!target) return null;
    if (target.value.length && target.value) {
      if (this.props.required && !target.value.length) {
        this.input.setState({
          error: true,
          helperText: "This field is required"
        });
      } else if (target.value.length < 5) {
        this.input.setState({
          error: true,
          helperText: "Expiry date needs MM/YY format"
        });
      }
    }
  };

  _onChange = value =>
    stringFormatter({
      value: value.toString().replace(/[^0-9-]/g, ""),
      delimiter: "/",
      occurance: 2
    });

  _value = () => this.input._value();

  render() {
    const { required, ...props } = this.props;
    return (
      <SInput
        {...props}
        noValidate
        onChange={this._onChange}
        maxLength={5}
        required={required}
        onBlur={this._onBlur}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputExpDate;
