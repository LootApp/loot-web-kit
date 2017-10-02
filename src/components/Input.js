import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SContainer = styled.div`
  border-bottom: 1px ${props => (props.disabled ? "dashed" : "solid")} #c6c6c6;
  transition: all 0.15s ease;
  position: relative;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  font-family: "Roboto", sans-serif;

  * {
    font-family: "Roboto", sans-serif;
  }

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: ${props => (props.focus || props.error ? "100%" : "10%")};
    left: ${props => (props.focus || props.error ? "0%" : "45%")};
    position: absolute;
    bottom: -2px;
    z-index: 0;
    background-color: ${props =>
      props.error ? "#da6e6e" : !props.focus ? "#545454" : props.colour};
    transition: all 0.2s ease;
    opacity: ${props => (props.focus || props.error ? 1 : 0)};
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
  opacity: ${props => (props.focus || props.active ? 1 : 0)};
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
      : props.focus
        ? props.error ? "#da6e6e" : props.colour
        : props.error ? "#da6e6e" : "#545454"};
  pointer-events: none;
  font-size: 10px;
  display: block;
  transition: all 0.15s ease;
  transform-origin: left top;
  transform: scale(${props => (props.focus || props.active ? 1 : 1.4)})
    translateY(${props => (props.focus || props.active ? 0 : "15px")});
  will-change: transform;
  text-align: left;

  & span {
    margin-left: 3px;
    color: #da6e6e;
  }
`;

const SHelperText = styled.span`
  font-size: 10px;
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
    getRef: PropTypes.func
  };

  static defaultProps = {
    value: "",
    placeholder: "",
    required: false,
    minLength: 0,
    maxLength: 0,
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
    getRef: null
  };

  state = {
    focus: false,
    value: this.props.value || "",
    error: false,
    touched: false,
    helperText: this.props.helperText || ""
  };

  componentDidMount() {
    this._getRef(this.input);
  }

  _onFocus = () => {
    this.setState({ focus: true });
    if (typeof this.props.onFocus === "function") this.props.onFocus();
  };

  _onBlur = ({ target }) => {
    target.blur();
    const validation = this._isValid(target.value);
    validation === true &&
      this.setState({
        focus: false,
        touched: true,
        error: false,
        helperText: this.props.helperText
      });
    if (typeof this.props.onBlur === "function")
      this.props.onBlur(validation !== true ? validation : { value: target.value, error: false });
  };

  _onChange = ({ target }) => {
    let value = target.value;
    if (this.props.maxLength && value.length > this.props.maxLength) return false;
    if (this.props.onChange) value = this.props.onChange(target.value);
    if (typeof value === "undefined") value = target.value;
    this.setState({ value });
    return value;
  };

  _isValid = value => {
    if (this.props.required && !value.length) {
      this.setState({
        focus: true,
        touched: true,
        error: true,
        helperText: "This field is required"
      });
      return { value, error: true };
    } else if (
      (value.length > 0 || this.props.required) &&
      this.props.minLength > 0 &&
      value.length < this.props.minLength
    ) {
      this.setState({
        focus: true,
        touched: true,
        error: true,
        helperText: `Minimum ${this.props.minLength} characters`
      });
      return { value, error: true };
    } else if (this.props.maxLength && value.length > this.props.maxLength) {
      this.setState({
        focus: true,
        touched: true,
        error: true,
        helperText: `Maximum ${this.props.maxLength} characters`
      });
      return { value, error: true };
    }
    return true;
  };

  _value = () => this.state.value;

  _reset = () => this.setState({ value: "", error: "" });

  _error = () => this.state.error;

  _setError = helperText => {
    this.setState({
      error: true,
      helperText
    });
  };

  _getRef = elm =>
    typeof this.props.getRef === "function" &&
    this.props.getRef({
      _reset: this._reset,
      _error: this._error,
      element: elm
    });

  _updateValue = value => {
    this.props.onChange(value);
    this.setState({ value });
  };

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
      onChange,
      onBlur,
      getRef,
      ...props
    } = this.props;
    return (
      <div {...props}>
        <SContainer
          colour={colour}
          focus={this.state.focus}
          error={this.state.error}
          disabled={disabled}
        >
          <SLabel
            colour={colour}
            focus={this.state.focus}
            error={this.state.error}
            disabled={disabled}
            active={!!this.state.value.length}
          >
            {label}
            {required && <span>*</span>}
          </SLabel>
          <SInput
            {...props}
            innerRef={input => (this.input = input)}
            type={type}
            colour={colour}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onChange={this._onChange}
            focus={this.state.focus}
            active={!!this.state.value.length}
            value={this.state.value}
            placeholder={placeholder}
            uppercase={uppercase}
            capitalise={capitalise}
          />
          {counter && <SCounter>{`${this.state.value.length} / ${maxLength}`}</SCounter>}
        </SContainer>
        {!noHelperText && (
          <SHelperText error={this.state.error} show={this.state.error || !!helperText.length}>
            {this.state.helperText}
          </SHelperText>
        )}
      </div>
    );
  }
}

export default Input;
