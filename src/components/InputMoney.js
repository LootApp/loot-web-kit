import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "./Input";
import formatAmount from "../utilities/formatAmount";

const SContainer = styled.div`
  display: flex;
  position: relative;
`;

const SPrefix = styled.div`
  font-size: 16px;
  padding-top: 19px;
  padding-right: 8px;
  color: ${props => (props.hasValue ? "#545454" : "#c6c6c6")};
  opacity: ${props => (props.focus || props.hasValue || props.error ? 1 : 0)};
  position: absolute;
  font-family: "Roboto", sans-serif;
`;

const SInput = styled(Input)`
  width: 100%;
  input {
    padding-left: 12px;
  }
`;

const SRemaining = styled.span`
  font-weight: 400;
  font-size: 14px;
  position: absolute;
  bottom: -5px;
  right: 0;
  color: ${({ error }) => (error ? "#da6e6e" : "#c6c6c6")};
`;

class InputMoney extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    maxLength: PropTypes.number,
    balance: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    minAmount: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    prefix: "£",
    maxLength: 10,
    balance: "",
    onChange: null,
    onBlur: null,
    minAmount: null,
    value: null
  };

  state = {
    remaining: "",
    showRemaining: false,
    focus: false,
    hasValue: this.props.value,
    error: false
  };

  _onChange = value => {
    const formatedValue = formatAmount(value);
    if (this.props.balance) this.updateRemaining(value);
    typeof this.props.onChange === "function" && this.props.onChange(formatedValue);
    if (value.length) this.setState({ hasValue: true });
    else this.setState({ hasValue: false });
    return formatedValue;
  };

  _onBlur = elm => {
    let valueObj = elm;
    if (!elm.value.length) this.setState({ hasValue: false });
    this.setState({ showRemaining: false, error: false });
    if (!this.state.active) this.setState({ focus: false });
    if (elm.value.length) {
      if (typeof this.props.minAmount === "number" && Number(elm.value) < this.props.minAmount) {
        this.input.setState({
          error: true,
          helperText: `Minimum amount is ${this.props.minAmount}`
        });
        valueObj = { ...valueObj, error: true };
      } else if (Number(elm.value) < 0.01) {
        this.input.setState({
          error: true,
          helperText: "Minimum amount is 0.01"
        });
        valueObj = { ...valueObj, error: true };
      }
    } else if (Number(this.state.remaining) < 0) {
      this.input.setState({
        error: true,
        helperText: "Amount exceeds balance"
      });
      valueObj = { ...valueObj, error: true };
    }
    if (typeof elm.value === "string" && !elm.value.length && this.props.balance)
      this.setState({ remaining: "" });

    typeof this.props.onBlur === "function" && this.props.onBlur(valueObj);
  };

  _onFocus = value => {
    this.setState({ focus: true, showRemaining: true });
    const inputValue = value || "";
    if (this.props.balance && !this.state.remaining.length) this.updateRemaining(inputValue);
  };

  updateRemaining = value => {
    if (this.props.balance.length) {
      const formatedValue = formatAmount(value);
      const remaining = value
        ? formatAmount((Number(this.props.balance) - Number(formatedValue)).toFixed(2))
        : formatAmount(this.props.balance);
      this.setState({ remaining });
    }
  };

  render() {
    const { prefix, maxLength, balance, onChange, onBlur, ...props } = this.props;
    const showRemainingBalance =
      !!this.props.balance.length && !!this.state.remaining.length && !!this.state.showRemaining;
    return (
      <SContainer {...props}>
        <SPrefix focus={this.state.focus} hasValue={this.state.hasValue} error={this.state.error}>
          {prefix}
        </SPrefix>
        <SInput
          {...props}
          type="tel"
          noValidate
          maxLength={maxLength}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          onChange={this._onChange}
          innerRef={input => (this.input = input)}
        />
        {showRemainingBalance &&
          <SRemaining error={this.state.remaining < 0}>
            {`${prefix}${this.state.remaining}`}
          </SRemaining>}
      </SContainer>
    );
  }
}

export default InputMoney;
