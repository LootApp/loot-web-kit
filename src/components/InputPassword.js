import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Input from "./Input";

const zoomFade = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
`;

const SRequirements = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.requirementColour};
`;

const SRequirement = styled.div`
  margin: 0 8px;
  padding-top: ${props => (props.open ? "10px" : 0)};
  height: ${props => (props.open ? "50px" : 0)};
  transition: all .2s ease;
  pointer-events: ${props => (props.open ? "auto" : "none")};
  position: relative;

  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${props => props.requirementColour};
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 0;
    opacity: 0;
    transform: scale(0);
    animation: ${props => (props.valid ? `${zoomFade} 0.7s linear` : "none")};
  }

  &::before,
  &::after {
    opacity: ${props => (props.open ? 1 : 0)};
    transition: all .2s ease;
    transition-delay: ${props => (props.open ? "0.2s" : "0s")};
    width: 100%;
    display: block;
    text-align: center;
  }

  &::before {
    content: "${({ icon }) => icon}";
    font-size: 28px;
    opacity: ${props => (props.valid && props.open ? 1 : props.open ? 0.7 : 0)};
    transform: scale(${props => (props.valid ? 1 : 0.8)});
  }

  &::after {
    content: "${props => props.text}";
    font-size: 12px;
  }
`;

const Container = styled.div`width: inherit;`;

class InputPassword extends Component {
  static propTypes = {
    requirementColour: PropTypes.string,
    requirements: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    getRef: PropTypes.func
  };

  static defaultProps = {
    requirementColour: "4db7c3",
    requirements: false,
    onChange: null,
    onBlur: null,
    getRef: null
  };

  state = {
    showRequirements: false,
    password: ""
  };

  _onChange = value => {
    this.setState({ password: value });
    typeof this.props.onChange === "function" && this.props.onChange(value);
    return value;
  };

  _onFocus = () => this.setState({ showRequirements: true });

  _onBlur = elm => {
    let valueObj = elm;
    if (elm.value.length > 0 && this.props.requirements) {
      if (this.state.password.toUpperCase() === this.state.password) {
        this.input.setState({
          error: true,
          helperText: "Minimum 1 Lowercase character"
        });
        valueObj = { ...elm, error: true };
      }
      if (this.state.password.toLowerCase() === this.state.password) {
        this.input.setState({
          error: true,
          helperText: "Minimum 1 Uppercase character"
        });
        valueObj = { ...elm, error: true };
      }
      if (!/\d/.test(this.state.password)) {
        this.input.setState({
          error: true,
          helperText: "Minimum 1 Number character"
        });
        valueObj = { ...elm, error: true };
      }
    }
    typeof this.props.onBlur === "function" && this.props.onBlur(valueObj);
    this.setState({ showRequirements: false });
  };

  _value = () => this.input._value();

  render() {
    const { requirementColour, requirements, onChange, onBlur, ...props } = this.props;
    return (
      <Container {...props}>
        <Input
          {...props}
          type="password"
          autoComplete="off"
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChange={this._onChange}
          minLength={8}
          ref={input => (this.input = input)}
        />
        {this.props.requirements && (
          <SRequirements requirementColour={requirementColour}>
            <SRequirement
              valid={this.state.password.length >= 8}
              icon="8+"
              text="characters"
              open={this.state.showRequirements}
            >
              <span />
            </SRequirement>
            <SRequirement
              valid={this.state.password.toUpperCase() !== this.state.password}
              icon="a"
              text="lower"
              open={this.state.showRequirements}
            >
              <span />
            </SRequirement>
            <SRequirement
              valid={this.state.password.toLowerCase() !== this.state.password}
              icon="A"
              text="upper"
              open={this.state.showRequirements}
            >
              <span />
            </SRequirement>
            <SRequirement
              valid={/\d/.test(this.state.password)}
              icon="#"
              text="number"
              open={this.state.showRequirements}
            >
              <span />
            </SRequirement>
          </SRequirements>
        )}
      </Container>
    );
  }
}

export default InputPassword;
