import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatAmount from "../utilities/formatAmount";
import isMobile from "../utilities/isMobile";
import Button from "./Button";

const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 0;
  outline: none;
  color: #4db7c3;
  text-align: center;
  font-weight: semibold;
  margin: 0 10px 0 0;
`;

const SPrefix = styled.span`
  margin-left: 10px;
  color: #c6c6c6;
  margin-bottom: -6px;
  font-size: 18px;
  font-weight: bold;
`;

const SButton = styled(Button)`
  width: 40px;
  font-size: 30px;
  padding: 0;
  height: 40px;
  text-indent: -9999px;
  position: relative;

  &::after {
    content: "${props => props.icon}";
    text-indent: 0;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    text-align: center;
    line-height: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SSpan = styled.span`
  font-size: 30px;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  position: absolute;
  display: inline-block;
  padding: 0 5px;
  left: -9999px;
`;

class InputIncrement extends Component {
  static propTypes = {
    maxLength: PropTypes.number,
    prefix: PropTypes.string
  };

  static defaultProps = {
    maxLength: 10,
    prefix: "£"
  };

  state = {
    value: "5.00"
  };

  componentDidMount() {
    this.input.style.width = `${this.span.offsetWidth}px`;
  }

  _onChange = ({ target }) => {
    const value = formatAmount(target.value);
    if (this.props.maxLength !== 9999 && value.length > this.props.maxLength)
      return false;
    this.setState({ value: value.length ? value : "0.00" }, () => {
      this.input.style.width = `${this.span.offsetWidth}px`;
    });
  };

  _onChangeValue = type => {
    let value = this.state.value.split(".")[0];
    const decimal = this.state.value.split(".")[1];
    type === "INCREMENT"
      ? (value = `${+value + 5}.${decimal}`)
      : type === "DECREMENT" && +value > 0
          ? (value = `${+value - 5}.${decimal}`)
          : (value = "0.00");
    this.setState({ value }, () => {
      this.input.style.width = `${this.span.offsetWidth}px`;
    });
  };

  _onMouseDown = type => {
    this._onChangeValue(type);
    this.timer = setTimeout(
      () => (this.interval = setInterval(() => this._onChangeValue(type), 100)),
      300
    );
  };

  _onMouseUp = () => {
    clearTimeout(this.timer);
    clearInterval(this.interval);
  };

  render() {
    const { maxLength, prefix, ...props } = this.props;
    return (
      <SContainer>
        <SButton
          onMouseDown={() => this._onMouseDown("DECREMENT")}
          onMouseUp={this._onMouseUp}
          onMouseOut={this._onMouseUp}
          colour="#4db7c3"
          icon="-"
        />
        <SPrefix>{prefix}</SPrefix>
        <SInput
          disabled={isMobile()}
          maxLength={maxLength}
          innerRef={input => (this.input = input)}
          type="tel"
          value={this.state.value}
          onChange={this._onChange}
          {...props}
        />
        <SButton
          onMouseDown={() => this._onMouseDown("INCREMENT")}
          onMouseUp={this._onMouseUp}
          onMouseOut={this._onMouseUp}
          colour="#4db7c3"
          icon="+"
        />
        <SSpan innerRef={span => (this.span = span)}>{this.state.value}</SSpan>
      </SContainer>
    );
  }
}

export default InputIncrement;
