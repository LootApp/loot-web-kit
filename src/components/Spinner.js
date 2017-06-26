import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotator = keyframes`
  0% { transform: rotate(0deg); opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: rotate(270deg); opacity: 0; }
`;

const dash = keyframes`
  0% { stroke-dashoffset: 187; transform: rotate(0deg); }
  50% { stroke-dashoffset: 46.75; transform: rotate(135deg); }
  100% { stroke-dashoffset: 187; transform: rotate(450deg); }
`;

const SSpiner = styled.svg`
  width: ${props => props.size};
  height: ${props => props.size};
  transform: rotate(0deg);
  opacity: 0;
  animation: ${rotator} 1.6s linear infinite;
  transform-origin: center;

  circle {
    transform: rotate(0deg);
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: 1.6s ease-in-out ${dash} infinite;
    stroke: ${props => props.colour};
  }
`;

class Spinner extends Component {
  static propTypes = {
    size: PropTypes.string,
    colour: PropTypes.string
  };

  static defaultProps = {
    size: "30px",
    colour: "#4db7c3"
  };

  render() {
    const { colour, size, ...props } = this.props;
    return (
      <SSpiner
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        size={size}
        colour={colour}
        {...props}
      >
        <circle
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </SSpiner>
    );
  }
}

export default Spinner;
