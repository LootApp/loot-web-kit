import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

class InputAccountNumber extends Component {
  static propTypes = {
    getRef: PropTypes.func
  };

  static defaultProps = {
    getRef: null
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onChange = value => value.toString().replace(/[^0-9]/gi, "");

  _value = () => this.input._value();

  render() {
    const { ...props } = this.props;
    return (
      <Input
        {...props}
        type="tel"
        noValidate
        maxLength={8}
        onChange={this._onChange}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputAccountNumber;
