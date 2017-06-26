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
    content: "${props => props.icon}";
    font-size: 28px;
    opacity: ${props => (props.valid ? 1 : props.open ? 0.7 : 0)};
    transform: scale(${props => (props.valid ? 1 : 0.8)});
  }

  &::after {
    content: "${props => props.text}";
    font-size: 12px;
  }
`;

const Container = styled.div`
  width: inherit;
`;

class InputPassword extends Component {
  static propTypes = {
    requirementColour: PropTypes.string,
    requirements: PropTypes.bool
  };

  static defaultProps = {
    requirementColour: "4db7c3",
    requirements: false
  };

  state = {
    showRequirements: false,
    password: ""
  };

  _onChange = value => {
    if (typeof value === "string") this.setState({ password: value });
    return value;
  };

  _onFocus = () => this.setState({ showRequirements: true });

  _onBlur = () => this.setState({ showRequirements: false });

  _value = () => this.input._value();

  render() {
    const { requirementColour, requirements, ...props } = this.props;
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
          innerRef={input => (this.input = input)}
        />
        {this.props.requirements &&
          <SRequirements requirementColour={requirementColour}>
            <SRequirement
              valid={this.state.password.length >= 8}
              icon="8+"
              text="characters"
              open={this.state.showRequirements}
            >
              <span valid={this.state.password.length >= 8} />
            </SRequirement>
            <SRequirement
              valid={this.state.password.toUpperCase() !== this.state.password}
              icon="a"
              text="lower"
              open={this.state.showRequirements}
            >
              <span
                valid={
                  this.state.password.toUpperCase() !== this.state.password
                }
              />
            </SRequirement>
            <SRequirement
              valid={this.state.password.toLowerCase() !== this.state.password}
              icon="A"
              text="upper"
              open={this.state.showRequirements}
            >
              <span
                valid={
                  this.state.password.toLowerCase() !== this.state.password
                }
              />
            </SRequirement>
            <SRequirement
              valid={/\d/.test(this.state.password)}
              icon="#"
              text="number"
              open={this.state.showRequirements}
            >
              <span valid={/\d/.test(this.state.password)} />
            </SRequirement>
          </SRequirements>}
      </Container>
    );
  }
}

export default InputPassword;
