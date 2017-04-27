import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colours } from "../Constants";
import formatAmount from "../utilities/formatAmount";

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
  color: ${colours.blue};
  text-align: center;
  font-weight: semibold;
`;

const SSpan = styled.span`
  font-size: 30px;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  position: absolute;
  display: inline-block;
  padding: 0 10px;
  left: -9999px;
`;

class InputIncrement extends Component {
  static propTypes = {
    maxLength: PropTypes.number
  };

  static defaultProps = {
    maxLength: 10
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
    this.setState({ value }, () => {
      this.input.style.width = `${this.span.offsetWidth}px`;
    });
  };

  render() {
    const { maxLength, ...props } = this.props;
    return (
      <SContainer>
        <SInput
          maxLength={maxLength}
          innerRef={input => (this.input = input)}
          type="tel"
          value={this.state.value}
          onChange={this._onChange}
          {...props}
        />
        <SSpan innerRef={span => (this.span = span)}>{this.state.value}</SSpan>
      </SContainer>
    );
  }
}

export default InputIncrement;
