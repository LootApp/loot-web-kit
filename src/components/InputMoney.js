import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "./Input";
import formatAmount from "../utilities/formatAmount";

const SContainer = styled.div`
  display: flex;
  height: 57px;
  position: relative;
`;

const SPrefix = styled.div`
  font-size: 18px;
  padding-right: 10px;
  margin-bottom: -2px;
  color: #c6c6c6;
  align-self: flex-end;
`;

const SInput = styled(Input)`
  width: 100%;
`;

const SRemaining = styled.span`
  font-weight: 400;
  position: absolute;
  top: 36px;
  right: 8px;
  color: ${({ red }) => (red ? "#da6e6e" : "#c6c6c6")};
`;

class InputMoney extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    maxLength: PropTypes.number,
    balance: PropTypes.string,
    getRef: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    prefix: "£",
    maxLength: 10,
    balance: "",
    getRef: null,
    onChange: null
  };

  state = {
    remaining: ""
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onChange = value => {
    const formatedValue = formatAmount(value);
    if (this.props.balance) this.updateRemaining(value);
    typeof this.props.onChange === "function" && this.props.onChange(formatedValue);
    return formatedValue;
  };

  _onBlur = value => {
    if (!!value.length && Number(value) < 0.01) {
      this.input.setState({
        error: true,
        helperText: "Minimum amount is 0.01"
      });
    } else if (Number(this.state.remaining) < 0) {
      this.input.setState({
        error: true,
        helperText: "Amount exceeds balance"
      });
    }
    if (typeof value === "string" && !value.length && this.props.balance)
      this.setState({ remaining: "" });
  };

  _onFocus = value => {
    const inputValue = value || "";
    if (this.props.balance) this.updateRemaining(inputValue);
  };

  _value = () => this.input._value();

  updateRemaining = value => {
    const formatedValue = formatAmount(value);
    if (typeof value === "string" && this.props.balance.length) {
      const remaining = value
        ? formatAmount((Number(this.props.balance) - Number(formatedValue)).toFixed(2))
        : formatAmount(this.props.balance);
      this.setState({ remaining });
    }
  };

  render() {
    const { prefix, maxLength, balance, ...props } = this.props;
    return (
      <SContainer {...props}>
        <SPrefix>
          {prefix}
        </SPrefix>
        <SInput
          {...props}
          maxLength={maxLength}
          type="tel"
          noValidate
          onChange={this._onChange}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          innerRef={input => (this.input = input)}
        />
        {!!this.props.balance.length &&
          !!this.state.remaining.length &&
          <SRemaining red={this.state.remaining < 0}>
            {`${prefix}${this.state.remaining}`}
          </SRemaining>}
      </SContainer>
    );
  }
}

export default InputMoney;
