import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colours, transitions } from "../Constants";

const SContainer = styled.div`
  border-bottom: 1px solid ${colours.grey};
  transition: ${transitions.fast};
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
    background-color: ${colours.blue};
    transition: ${transitions.long};
    opacity: ${props => (props.focus ? 1 : 0)};
  }

  &:hover {
    border-bottom: 2px solid ${colours.darkGrey};
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
`;

const SLabel = styled.label`
  color: ${props => (props.focus ? colours.blue : colours.darkGrey)};
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

class Input extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: ""
  };

  state = {
    focus: false,
    value: this.props.value
  };

  _onFocus = () => {
    this.setState({ focus: true });
  };

  _onBlur = () => {
    this.setState({ focus: false });
  };

  render() {
    return (
      <SContainer focus={!!this.state.value.length || this.state.focus}>
        <SLabel focus={!!this.state.value.length || this.state.focus}>
          Test Label
        </SLabel>
        <SInput
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          focus={!!this.state.value.length || this.state.focus}
        />
      </SContainer>
    );
  }
}

export default Input;
