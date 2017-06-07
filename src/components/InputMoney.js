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
  font-size: 20px;
  padding-right: 11px;
  color: #c6c6c6;
  align-self: flex-end;
`;

const SInput = styled(Input)`
  width: 100%;
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

  _onChange = value => formatAmount(value);

  _onBlur = value => {
    if (!!value.length && Number(value) < 0.01)
      this.input.setState({
        error: true,
        helperText: "Minimum amount is 0.01"
      });
  };

  _value = () => this.input._value();

  render() {
    const { prefix, maxLength, ...props } = this.props;
    return (
      <SContainer {...props}>
        <SPrefix>{prefix}</SPrefix>
        <SInput
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
