import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Spinner from "./Spinner";

const ripple = keyframes`
  0% { opacity: 0;}
  25% { opacity: 1; }
  100% { width: 200%; padding-bottom: 200%; opacity: 0; }
`;

const SButton = styled.button`
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  appearance: none;
  position: relative;
  display: inline-block;
  padding: 10px 16px;
  margin: 0;
  vertical-align: middle;
  overflow: visible;
  color: ${props => (props.outline ? props.colour : "#ffffff")};
  font-size: 14px;
  text-transform: uppercase;
  line-height: 20px;
  font-weight: 400;
  opacity: ${props => (props.disabled ? 0.65 : 1)};
  pointer-events: ${props =>
    props.disabled || props.loading ? "none" : "auto"};
  text-align: center;
  background-color: ${props => (props.outline ? "transparent" : props.colour)};
  border: none;
  user-select: none;
  transition: all .15s ease;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: ${props =>
    props.outline
      ? `0 0 0 2px ${props.colour} inset !important`
      : "0 2px 2px rgba(0, 0, 0, 0.2)"};

  &:hover {
    box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const SLoading = styled.span`
  position: absolute;
  display: block;
  content: "";
  border-radius: 2px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${props => props.colour};
  transition: all .2s ease;
  opacity: ${props => (props.loading ? 1 : 0)};
  pointer-events: none;
  padding-top: 8px;
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
    background-color: ${props => props.rippleColour};
    animation: ${props => (props.active ? `${ripple} .4s ease-in` : "none")};
    display: block;
  }
`;

class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    fullWidth: PropTypes.bool,
    colour: PropTypes.string,
    rippleColour: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    spinnerColour: PropTypes.bool
  };

  static defaultProps = {
    children: "button",
    onClick: null,
    fullWidth: false,
    colour: "#4db7c3",
    rippleColour: "rgba(255, 255, 255, 0.25)",
    outline: false,
    disabled: false,
    loading: false,
    spinnerColour: "rgba(255,255,255, 0.9)"
  };

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
    typeof this.props.onClick === "function" && this.props.onClick();
  };

  render() {
    const {
      children,
      onClick,
      fullWidth,
      colour,
      outline,
      rippleColour,
      disabled,
      loading,
      spinnerColour,
      ...props
    } = this.props;
    return (
      <SButton
        outline={outline}
        colour={colour}
        fullWidth={fullWidth}
        onClick={this._onClick}
        innerRef={button => (this.button = button)}
        disabled={disabled}
        loading={loading}
        {...props}
      >
        <SLoading loading={loading} colour={colour}>
          <Spinner colour={spinnerColour} size="24px" />
        </SLoading>
        <SRipple
          rippleColour={rippleColour}
          active={this.state.active}
          top={this.state.top}
          left={this.state.left}
        >
          <span />
        </SRipple>
        {children}
      </SButton>
    );
  }
}

export default Button;
