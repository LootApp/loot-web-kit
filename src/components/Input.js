import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SContainer = styled.div`
  border-bottom: 1px
    ${props => {
      if (props.focus) return "solid transparent";
      if (props.disabled) return "dashed #c6c6c6";
      if (!props.disabled) return "solid #c6c6c6";
    }};
  transition: all 0.15s ease;
  position: relative;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  &::after {
    content: '';
    position: absolute;
    height: ${props => (props.progress ? "1px" : "2px")};
    width: ${props => (props.focus || props.progress ? "100%" : "10%")};
    left: ${props => (props.focus || props.progress ? "0%" : "45%")};
    position: absolute;
    bottom: -2px;
    z-index: 0;
    background-color: ${props => (props.error ? "#da6e6e" : props.colour)};
    transition: all 0.2s ease;
    opacity: ${props => (props.focus ? (props.progress ? 0.5 : 1) : 0)};
    display: ${props => (props.disabled ? "none" : "block")};
  }

  &:hover {
    border-bottom-color: ${props => (props.focus ? "none" : "#545454")};
  }
`;

const SInput = styled.input`
  width: 100%;
  color: #545454;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px 0;
  background-color: transparent;
  transition: all 0.15s ease;
  opacity: ${props => (props.focus ? 1 : 0)};
  text-transform: ${props =>
    props.uppercase ? "uppercase" : props.capitalise ? "capitalize" : "none"};

  &::selection {
    background-color: ${props => props.colour};
    color: #ffffff;
  }

  &::placeholder {
    color: #c6c6c6;
  }
`;

const SLabel = styled.label`
  color: ${props =>
    props.disabled
      ? "#545454"
      : props.focus ? (props.error ? "#da6e6e" : props.colour) : "#545454"};
  pointer-events: none;
  font-size: 12px;
  display: block;
  transition: all 0.15s ease;
  transform-origin: left top;
  transform: scale(${props => (props.focus ? 1 : 1.1666666667)})
    translateY(${props => (props.focus ? 0 : "20px")});
  will-change: transform;
  text-align: left;

  & span {
    margin-left: 3px;
    color: "#da6e6e";
  }
`;

const SHelperText = styled.span`
  font-size: 12px;
  color: ${props => (props.error ? "#da6e6e" : "#545454")};
  display: block;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? "visible" : "hidden")};
  pointer-events: ${props => (props.show ? "auto" : "none")};
  transition: all 0.15s ease;
  margin-top: 8px;
  text-align: left;
  line-height: 1;
  height: 12px;
`;

const SCounter = styled.span`
  display: block;
  font-size: 10px;
  position: absolute;
  color: #545454;
  right: 0;
  bottom: -22px;
`;

const ProgressBar = styled.div`
  top: 49px;
  position: absolute;
  border: ${props => {
    if (!props.focused) return "1px solid transparent";
    if (props.focused && props.error) return "1px solid #DA6E6E";
    if (props.focused) return "1px solid #4db7c3";
  }};
  width: ${props => {
    if (!props.focused) return "100%";
    if (props.focused)
      return props.percentage < 0 || props.percentage > 100 ? "0%" : `${props.percentage}%`;
  }};
  transition: all 0.2s ease;
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
    noHelperText: PropTypes.bool,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    colour: PropTypes.string,
    onFocus: PropTypes.func,
    percentage: PropTypes.number,
    progress: PropTypes.bool
  };

  static defaultProps = {
    value: "",
    placeholder: "",
    required: false,
    minLength: 0,
    maxLength: 9999,
    helperText: "",
    noHelperText: false,
    uppercase: false,
    capitalise: false,
    counter: false,
    disabled: false,
    type: "text",
    onChange: null,
    onBlur: null,
    colour: "#4db7c3",
    onFocus: null,
    percentage: 0,
    progress: false
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
    if (typeof this.props.onFocus === "function") this.props.onFocus();
  };

  _onBlur = ({ target }) => {
    this._validate(target.value) === true &&
      this.setState({
        focus: false,
        touched: true,
        error: false,
        helperText: this.props.helperText
      });
    if (typeof this.props.onBlur === "function") this.props.onBlur(target.value);
  };

  _onChange = ({ target }) => {
    let value;
    typeof this.props.onChange === "function"
      ? (value = this.props.onChange(target.value))
      : (value = target.value);
    if (this.props.maxLength !== 9999 && value.length > this.props.maxLength) return false;
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
      label,
      placeholder,
      required,
      minLength,
      maxLength,
      helperText,
      noHelperText,
      uppercase,
      capitalise,
      counter,
      disabled,
      type,
      colour,
      onFocus,
      percentage,
      progress,
      ...props
    } = this.props;
    return (
      <div {...props}>
        <SContainer
          colour={colour}
          focus={!!this.state.value.length || this.state.focus}
          error={this.state.error}
          disabled={disabled}
          progress={progress}
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
          {progress &&
            <ProgressBar
              error={this.state.error}
              focused={!!this.state.value.length || this.state.focus}
              percentage={percentage}
            />}
          {counter &&
            <SCounter>
              {`${this.state.value.length} / ${maxLength}`}
            </SCounter>}
        </SContainer>
        {!noHelperText &&
          <SHelperText error={this.state.error} show={this.state.error || !!helperText.length}>
            {this.state.helperText}
          </SHelperText>}
      </div>
    );
  }
}

export default Input;
