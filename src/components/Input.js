import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colours, transitions } from "../Constants";

const SContainer = styled.div`
  border-bottom: 1px ${props => (props.disabled ? "dashed" : "solid")} ${colours.grey};
  transition: ${transitions.base};
  position: relative;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: ${props => (props.focus ? "100%" : "10%")};
    left: ${props => (props.focus ? "0%" : "45%")};
    position: absolute;
    bottom: -2px;
    z-index: 0;
    background-color: ${props => (props.error ? colours.red : props.colour)};
    transition: ${transitions.long};
    opacity: ${props => (props.focus ? 1 : 0)};
    display: ${props => (props.disabled ? "none" : "block")};
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
  padding: 8px 0;
  background-color: transparent;
  transition: ${transitions.base};
  opacity: ${props => (props.focus ? 1 : 0)};
  text-transform: ${props => (props.uppercase ? "uppercase" : props.capitalise ? "capitalize" : "none")};

  &::selection {
    background-color: ${props => props.colour};
    color: ${colours.white};
  }

  &::placeholder {
    color: ${colours.grey};
  }
`;

const SLabel = styled.label`
  color: ${props => (props.disabled ? colours.darkGrey : props.focus ? props.error ? colours.red : props.colour : colours.darkGrey)};
  padding-top: 16px;
  pointer-events: none;
  font-size: 12px;
  display: block;
  transition: ${transitions.base};
  transform-origin: top left;
  transform:
    scale(${props => (props.focus ? 1 : 1.3333)})
    translateY(${props => (props.focus ? 0 : "14px")});
  will-change: transform;

  & span {
    margin-left: 3px;
    color: ${colours.red};
  }
`;

const SHelperText = styled.span`
  font-size: 12px;
  color: ${props => (props.error ? colours.red : colours.darkGrey)};
  display: block;
  transition: ${transitions.base};
  margin-top: 8px;
`;

const SCounter = styled.span`
  display: block;
  font-size: 10px;
  position: absolute;
  color: ${colours.darkGrey};
  right: 0;
  bottom: -22px;
`;

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    helperText: PropTypes.string,
    uppercase: PropTypes.bool,
    capitalise: PropTypes.bool,
    counter: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    colour: PropTypes.string
  };

  static defaultProps = {
    value: "",
    placeholder: "",
    required: false,
    minLength: 0,
    maxLength: 9999,
    helperText: "",
    uppercase: false,
    capitalise: false,
    counter: false,
    disabled: false,
    type: "text",
    onChange: null,
    onBlur: null,
    colour: colours.blue
  };

  state = {
    focus: false,
    value: this.props.value,
    error: false,
    touched: false,
    helperText: this.props.helperText
  };

  _onFocus = () => {
    this.setState({ focus: true });
  };

  _onBlur = ({ target }) => {
    this._validate(target.value) === true &&
      this.setState({
        focus: false,
        touched: true,
        error: false,
        helperText: this.props.helperText
      });
    if (typeof this.props.onBlur === "function")
      this.props.onBlur(target.value);
  };

  _onChange = ({ target }) => {
    let value;
    typeof this.props.onChange === "function"
      ? (value = this.props.onChange(target.value))
      : (value = target.value);
    if (this.props.maxLength !== 9999 && value.length > this.props.maxLength)
      return false;
    this.setState({ value });
  };

  _validate = value => {
    if (this.props.required && !value.length) {
      return this.setState({
        focus: true,
        touched: true,
        error: true,
        helperText: "This field is required"
      });
    } else if (
      (value.length > 0 || this.props.required) &&
      this.props.minLength > 0 &&
      value.length < this.props.minLength
    ) {
      return this.setState({
        focus: true,
        touched: true,
        error: true,
        helperText: `Minimum ${this.props.minLength} characters`
      });
    } else if (this.props.maxLength && value.length > this.props.maxLength) {
      return this.setState({
        focus: true,
        touched: true,
        error: true,
        helperText: `Maximum ${this.props.maxLength} characters`
      });
    }
    return true;
  };

  _value = () => this.state.value;

  render() {
    const {
      value,
      label,
      placeholder,
      required,
      minLength,
      maxLength,
      helperText,
      uppercase,
      capitalise,
      counter,
      disabled,
      type,
      colour,
      ...props
    } = this.props;
    return (
      <div {...props}>
        <SContainer
          colour={colour}
          focus={!!this.state.value.length || this.state.focus}
          error={this.state.error}
          disabled={disabled}
        >
          <SLabel
            colour={colour}
            focus={!!this.state.value.length || this.state.focus}
            error={this.state.error}
            disabled={disabled}
          >
            {label}
            {required && <span>*</span>}
          </SLabel>
          <SInput
            {...props}
            type={type}
            colour={colour}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onChange={this._onChange}
            focus={!!this.state.value.length || this.state.focus}
            value={this.state.value}
            placeholder={placeholder}
            uppercase={uppercase}
            capitalise={capitalise}
          />
          {counter &&
            <SCounter>
              {`${this.state.value.length} / ${maxLength}`}
            </SCounter>}
        </SContainer>
        {(this.state.error || !!helperText.length) &&
          <SHelperText error={this.state.error}>
            {this.state.helperText}
          </SHelperText>}
      </div>
    );
  }
}

export default Input;
