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
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: null
  };

  _onChange = ({ target }) => !!this.props.onChange && this.props.onChange(target.id);

  render() {
    const { onChange, ...props } = this.props;
    return (
      <SContainer {...props}>
        {this.props.labels.map((label, index) =>
          <StyledWrapper key={label}>
            <SInput
              {...props}
              id={`${label}`}
              name={this.props.name}
              type="radio"
              onChange={this._onChange}
            />
            <StyledLabel
              first={index === 0}
              last={index === this.props.labels.length - 1}
              htmlFor={`${label}`}
            >
              {label}
            </StyledLabel>
          </StyledWrapper>
        )}
      </SContainer>
    );
  }
}

export default InputRadio;
