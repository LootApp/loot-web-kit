import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { colours, transitions } from "../Constants";

const ripple = keyframes`
  0% { opacity: 0;}
  25% { opacity: 1; }
  100% { width: 200%; padding-bottom: 200%; opacity: 0; }
`;

const SButton = styled.button`
  appearance: none;
  position: relative;
  display: inline-block;
  padding: 10px 16px;
  margin: 0;
  vertical-align: middle;
  overflow: visible;
  color: ${colours.white};
  font-size: 14px;
  text-transform: uppercase;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  background-color: ${colours.blue};
  border: none;
  user-select: none;
  transition: ${transitions.base};
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const SRipple = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;

  span {
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.25);
    animation: ${props => (props.active ? `${ripple} .4s ease-in` : "none")};
    display: block;
  }
`;

class Button extends Component {
  state = {
    active: false,
    top: "50%",
    left: "50%"
  };

  _onClick = event => {
    if (!this.state.active) {
      const offsetLeft = this.button.getBoundingClientRect().left;
      const offsetTop = this.button.getBoundingClientRect().top;
      const x = event.clientX - offsetLeft;
      const y = event.clientY - offsetTop;
      this.setState({ active: true, top: `${y}px`, left: `${x}px` });
      setTimeout(() => {
        this.setState({ active: false });
      }, 400);
    }
  };

  render() {
    return (
      <SButton
        onClick={this._onClick}
        innerRef={button => (this.button = button)}
      >
        <SRipple
          active={this.state.active}
          top={this.state.top}
          left={this.state.left}
        >
          <span />
        </SRipple>
        Hello World
      </SButton>
    );
  }
}

export default Button;
