import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "./Input";
import formatAmount from "../utilities/formatAmount";

const SContainer = styled.div`
  display: flex;
  height: 57px;
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

class InputMoney extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    maxLength: PropTypes.number,
    getRef: PropTypes.func,
    onChange: PropTypes.func,
    minAmount: PropTypes.string
  };

  static defaultProps = {
    prefix: "£",
    maxLength: 10,
    getRef: null,
    onChange: null,
    minAmount: null
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onChange = value => {
    const formatedValue = formatAmount(value);
    typeof this.props.onChange === "function" &&
      this.props.onChange(formatedValue);
    return formatedValue;
  };

  _onBlur = value => {
    if (value.length)
      if (
        !!this.props.minAmount.lenght &&
        Number(value) < Number(this.props.minAmount)
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
  };

  _value = () => this.input._value();

  render() {
    const { prefix, maxLength, ...props } = this.props;
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
          innerRef={input => (this.input = input)}
        />
      </SContainer>
    );
  }
}

export default InputMoney;
