import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { border-bottom: 2px solid transparent; }
  100% { border-bottom: 2px solid #00C9C4; }
`;

const SContainer = styled.div`
  display: flex;
  padding: 25px;
`;

const SInput = styled.input`
  display: none;

  &[type="radio"]:checked + label {
    color: #00c9c4;
    animation: ${pulse} 0.8s ease 0s 1;
    border-bottom: 2px solid #00c9c4;
  }
`;

const StyledLabel = styled.label`
  border-top-right-radius: ${({ last }) => (last ? "5px" : 0)};
  border-top-left-radius: ${({ first }) => (first ? "5px" : 0)};
  border-bottom-right-radius: ${({ last }) => (last ? "5px" : 0)};
  border-bottom-left-radius: ${({ first }) => (first ? "5px" : 0)};
  text-transform: capitalize;
  position: relative;
  background: white;
  padding: 20px 30px;
  letter-spacing: 1px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1em;
`;

const StyledWrapper = styled.div`
  box-shadow: 0 30px 50px rgba(50, 50, 93, 0.12), 0 10px 20px rgba(50, 50, 93, 0.1);
`;

class InputRadio extends Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    getRef: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    getRef: null,
    onChange: null
  };

  state = {
    inputs: {},
    error: true
  };

  _onChange = ({ target }) => {
    this.setState({ error: false });
    typeof this.props.onChange === "function" && this.props.onChange(target.id);
  };

  _setInput = (input, i) => {
    this[`input${i + 1}`] = input;
    this.state.inputs[`input${i + 1}`] = input;
  };

  _createInputs = labels => {
    const inputs = [];
    for (let i = 0; i < labels.length; i += 1) {
      inputs.push(
        <StyledWrapper key={labels[i]}>
          <SInput
            id={`${labels[i]}`}
            name={this.props.name}
            type="radio"
            onChange={this._onChange}
            innerRef={input => this._setInput(input, i)}
          />
          <StyledLabel
            first={i === 0}
            last={i === this.props.labels.length - 1}
            htmlFor={`${labels[i]}`}
          >
            {labels[i]}
          </StyledLabel>
        </StyledWrapper>
      );
    }

    return inputs;
  };

  _reset = () => {
    for (let i = 0; i < Object.keys(this.state.inputs).length; i += 1) {
      this.state.inputs[Object.keys(this.state.inputs)[i]].checked = false;
    }
    this.setState({ error: true });
  };

  _error = () => this.state.error;

  ref = getRef =>
    typeof getRef === "function" &&
    getRef({
      element: this.state.inputs,
      _reset: this._reset,
      _error: this._error
    });

  render() {
    const { onChange, getRef, labels, ...props } = this.props;
    return (
      <SContainer {...props} getRef={this.ref(getRef)}>
        {this._createInputs(labels)}
      </SContainer>
    );
  }
}

export default InputRadio;
