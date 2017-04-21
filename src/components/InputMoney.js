import React, { Component } from "react";
import Input from "./Input";

class InputMoney extends Component {
  _onChange = value => {
    let formatedValue = value;
    if (value.length === 1) formatedValue = `0.0${value}`;
    else {
      formatedValue = value.split(".").join("");
      const length = formatedValue.length;
      formatedValue = `${formatedValue.substring(0, length - 2)}.${formatedValue.substring(length - 2)}`;
    }
    return isNaN(Number(formatedValue)) ? "" : Number(formatedValue).toString();
  };

  render() {
    const { ...props } = this.props;
    return (
      <Input
        {...props}
        type="tel"
        onChange={this._onChange}
        innerRef={input => this.input = input}
      />
    );
  }
}

export default InputMoney;
