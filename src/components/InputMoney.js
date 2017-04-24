import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "./Input";
import { colours } from "../Constants";

const SContainer = styled.div`
  display: flex;
`;

const SPrefix = styled.div`
  font-size: 24px;
  padding-right: 16px;
  color: ${colours.grey};
  align-self: flex-end;
`;

const SInput = styled(Input)`
  flex-grow: 1;
`;

class InputMoney extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    maxLength: PropTypes.number
  };

  static defaultProps = {
    prefix: "£",
    maxLength: 10
  };

  _onChange = value => {
    let formatedValue = value.toString();
    if (formatedValue.length === 1) formatedValue = `0.0${value}`;
    else {
      formatedValue = formatedValue.split(".").join("");
      const length = formatedValue.length;
      formatedValue = `${formatedValue.substring(0, length - 2)}.${formatedValue.substring(length - 2)}`;
    }
    formatedValue = Number(formatedValue).toString();
    if (formatedValue.indexOf(".") === -1)
      formatedValue = `${formatedValue}.00`;
    const decimal = formatedValue.substring(formatedValue.indexOf(".") + 1);
    if (decimal.length < 2) formatedValue = `${formatedValue}0`;
    if (formatedValue.indexOf(".") === -1)
      formatedValue = `${formatedValue}.00`;
    return formatedValue === "NaN" ||
      formatedValue === "0" ||
      formatedValue === "00.00" ||
      formatedValue === "NaN.00"
      ? ""
      : formatedValue;
  };

  _value = () => this.input._value();

  render() {
    const { prefix, maxLength, ...props } = this.props;
    return (
      <SContainer>
        <SPrefix>{prefix}</SPrefix>
        <SInput
          {...props}
          maxLength={maxLength}
          type="tel"
          onChange={this._onChange}
          innerRef={input => (this.input = input)}
        />
      </SContainer>
    );
  }
}

export default InputMoney;
