import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

class Card extends Component {
  static propTypes = {
    maxLength: PropTypes.number,
    minLength: PropTypes.number
  };

  static defaultProps = {
    maxLength: 19,
    minLength: 13
  };

  _onChange = value => {
    let formatedValue = value.replace(/\s/g, "");
    formatedValue = formatedValue
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    return formatedValue;
  };

  _value = () => this.input._value();

  render() {
    const { maxLength, minLength, ...props } = this.props;
    return (
      <Input
        type="tel"
        maxLength={maxLength}
        minLength={minLength}
        innerRef={input => (this.input = input)}
        onChange={this._onChange}
        {...props}
      />
    );
  }
}

export default Card;
