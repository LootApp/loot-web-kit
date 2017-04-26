import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import { colours, transitions } from "../Constants";

const SRequirements = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.requirementColour};
`;

const SRequirement = styled.div`
  margin: 0 8px;
  height: ${props => (props.open ? "50px" : 0)};
  transition: ${transitions.long};
  overflow: hidden;

  &::before,
  &::after {
    opacity: ${props => (props.open ? 1 : 0)};
    transition: ${transitions.long};
    transition-delay: ${props => (props.open ? "0.2s" : "0s")};
    width: 100%;
    display: block;
    text-align: center;
  }

  &::before {
    content: "${props => props.icon}";
    font-size: 28px;
  }

  &::after {
    content: "${props => props.text}";
    font-size: 12px;
  }
`;

class InputPassword extends Component {
  static propTypes = {
    requirementColour: PropTypes.string
  };

  static defaultProps = {
    requirementColour: colours.blue
  };

  state = {
    showRequirements: false
  };

  _onFocus = () => this.setState({ showRequirements: true });

  _onBlur = () => this.setState({ showRequirements: false });

  render() {
    const { requirementColour, ...props } = this.props;
    return (
      <div>
        <Input
          type="password"
          autoComplete="off"
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          {...props}
        />
        <SRequirements requirementColour={requirementColour}>
          <SRequirement
            icon="8+"
            text="characters"
            open={this.state.showRequirements}
          />
          <SRequirement
            icon="a"
            text="lower"
            open={this.state.showRequirements}
          />
          <SRequirement
            icon="A"
            text="upper"
            open={this.state.showRequirements}
          />
          <SRequirement
            icon="#"
            text="number"
            open={this.state.showRequirements}
          />
        </SRequirements>
      </div>
    );
  }
}

export default InputPassword;
