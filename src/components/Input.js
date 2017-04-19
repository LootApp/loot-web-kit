import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colours, transitions } from "../Constants";

const SContainer = styled.div`
  border-bottom: 1px solid ${colours.grey};
  transition: ${transitions.base};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: ${props => (props.focus ? "100%" : "10%")};
    left: ${props => (props.focus ? "0%" : "45%")};
    position: absolute;
    bottom: -2px;
    display: block;
    z-index: 1;
    background-color: ${props => (props.error ? colours.red : colours.blue)};
    transition: ${transitions.long};
    opacity: ${props => (props.focus ? 1 : 0)};
  }

  &:hover {
    border-bottom-color: ${colours.darkGrey};
  }
`;

const SInput = styled.input`
  width: 100%;
  color: ${colours.darkGrey};
  border: none;
  outline: none;
  font-size: 16px;
  padding-bottom: 8px;
  background-color: transparent;
  transition: ${transitions.base};
  opacity: ${props => (props.focus ? 1 : 0)};

  &::selection {
    background-color: ${colours.blue};
    color: ${colours.white};
  }
`;

const SLabel = styled.label`
  color: ${props => (props.focus ? props.error ? colours.red : colours.blue : colours.darkGrey)};
  padding-top: 16px;
  padding-bottom: 8px;
  pointer-events: none;
  font-size: 12px;
  display: block;
  transition: ${transitions.base};
  transform-origin: top left;
  transform:
    scale(${props => (props.focus ? 1 : 1.3333)})
    translateY(${props => (props.focus ? 0 : "14px")});
  will-change: transform;
`;

const SHelperText = styled.span`
  font-size: 12px;
  color: ${props => (props.error ? colours.red : colours.darkGrey)};
  display: block;
  transition: ${transitions.base};
  margin-top: 8px;
`;

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    touched: PropTypes.bool,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number
  };

  static defaultProps = {
    value: "",
    placeholder: "",
    error: false,
    touched: false,
    required: false,
    minLength: 0,
    maxLength: 9999
  };

  state = {
    focus: false,
    value: this.props.value,
    error: this.props.error,
    touched: this.props.touched
  };

  _onFocus = () => {
    this.setState({ focus: true });
  };

  _onBlur = ({ target }) => {
    this._validate(target.value) === true &&
      this.setState({ focus: false, touched: true, error: false });
  };

  _onChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  _validate = value => {
    if (
      (this.props.required && !value.length) ||
      (this.props.minLength > 0 && value.length < this.props.minLength) ||
      (this.props.maxLength && value.length > this.props.maxLength)
    ) {
      return this.setState({ focus: true, touched: true, error: true });
    }
    return true;
  };

  render() {
    return (
      <div>
        <SContainer
          focus={!!this.state.value.length || this.state.focus}
          error={this.state.error}
        >
          <SLabel
            focus={!!this.state.value.length || this.state.focus}
            error={this.state.error}
          >
            {this.props.label}
          </SLabel>
          <SInput
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onChange={this._onChange}
            focus={!!this.state.value.length || this.state.focus}
            value={this.state.value}
            placeholder={this.props.placeholder}
          />
        </SContainer>
        <SHelperText error={this.state.error}>Helper Text</SHelperText>
      </div>
    );
  }
}

export default Input;
