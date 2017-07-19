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

const SDifference = styled.span`
  font-weight: 400;
  position: absolute;
  top: 34px;
  right: 8px;
  color: ${({ red }) => (red ? "#da6e6e" : "#c6c6c6")};
`;

class InputMoney extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    maxLength: PropTypes.number,
    balance: PropTypes.number,
    getRef: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    prefix: "£",
    maxLength: 10,
    balance: 0,
    getRef: null,
    onChange: null
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onChange = value => {
    const formatedValue = formatAmount(value);
    if (typeof value === "string") {
      console.log("value", Number(value));
      console.log("this.props.balance", this.props.balance);
      this.setState({ remaining: formatAmount(this.props.balance - Number(value)) });
    }
    typeof this.props.onChange === "function" && this.props.onChange(formatedValue);
    return formatedValue;
  };

  _onBlur = value => {
    if (!!value.length && Number(value) < 0.01)
      this.input.setState({
        error: true,
        helperText: "Minimum amount is 0.01"
      });
  };

  _value = () => this.input._value();

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
          onChange={this._onChange}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          innerRef={input => (this.input = input)}
        />
        {!!this.state.remaining &&
          !!balance &&
          <SDifference>{`${prefix}${this.state.remaining}`}</SDifference>}
      </SContainer>
    );
  }
}

export default InputMoney;
