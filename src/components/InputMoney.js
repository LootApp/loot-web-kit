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
  padding-top: 21px;
  padding-right: 8px;
  color: ${props => (props.active ? "#545454" : "#c6c6c6")};
  opacity: ${props => (props.focus ? 1 : 0)};
  position: absolute;
  font-family: 'Roboto', sans-serif;
`;

const SInput = styled(Input)`
  width: 100%;
  input {padding-left: 12px;}
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
    getRef: PropTypes.func,
    onChange: PropTypes.func,
    minAmount: PropTypes.number
  };

  static defaultProps = {
    prefix: "£",
    maxLength: 10,
    balance: "",
    getRef: null,
    onChange: null,
    minAmount: null
  };

  state = {
    remaining: "",
    acitve: false,
    focus: false
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onChange = value => {
    const formatedValue = formatAmount(value);
    this.setState({ active: !!formatedValue });
    if (this.props.balance) this.updateRemaining(value);
    typeof this.props.onChange === "function" &&
      this.props.onChange(formatedValue);
    return formatedValue;
  };

  _onBlur = value => {
    if (!this.state.active) this.setState({ focus: false });
    if (value.length) {
      if (
        typeof this.props.minAmount === "number" &&
        Number(value) < this.props.minAmount
      ) {
        this.input.setState({
          error: true,
          helperText: `Minimum amount is ${this.props.minAmount}`
        });
      } else if (Number(value) < 0.01) {
        this.input.setState({
          error: true,
          helperText: "Minimum amount is 0.01"
        });
      }
    } else if (Number(this.state.remaining) < 0) {
      this.input.setState({
        error: true,
        helperText: "Amount exceeds balance"
      });
    }

    if (!value.length && this.props.balance) this.setState({ remaining: "" });
  };

  _onFocus = value => {
    this.setState({ focus: true });
    const inputValue = value || "";
    if (this.props.balance && !this.state.remaining.length)
      this.updateRemaining(inputValue);
  };

  updateRemaining = value => {
    if (this.props.balance.length) {
      const formatedValue = formatAmount(value);
      const remaining = value
        ? formatAmount(
            (Number(this.props.balance) - Number(formatedValue)).toFixed(2)
          )
        : formatAmount(this.props.balance);
      this.setState({ remaining });
    }
  };

  render() {
    const { prefix, maxLength, balance, onChange, ...props } = this.props;
    return (
      <SContainer {...props}>
        <SPrefix focus={this.state.focus} active={this.state.active}>
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
        {!!this.props.balance.length &&
          !!this.state.remaining.length &&
          <SRemaining error={this.state.remaining < 0}>
            {`${prefix}${this.state.remaining}`}
          </SRemaining>}
      </SContainer>
    );
  }
}

export default InputMoney;
