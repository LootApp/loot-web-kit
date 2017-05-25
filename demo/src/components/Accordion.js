import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colours } from "../Constants";
import arrow from "../assets/arrow.svg";

const SHeading = styled.div`
  padding: 25px 20px;
  font-size: 20px;
  border-bottom: 1px solid #E0E4E5;
  position: relative;

  &:hover {
    color: ${colours.blue};
    cursor: pointer;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 8px;
    background-image: url(${arrow});
    background-size: cover;
    right: 20px;
    top: 50%;
    margin-top: -3px;
    transform: rotate(${props => (props.open ? "180deg" : 0)});
  }
`;

const SContent = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  overflow: hidden;
  background-color: ${colours.lightGrey};
  border-bottom: 1px solid #E0E4E5;
  padding: 20px 40px;
`;

class Accordion extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired
  };

  state = {
    open: false
  };

  _onToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <SHeading open={this.state.open} onClick={this._onToggle}>
          {this.props.title}
        </SHeading>
        <SContent open={this.state.open}>
          {this.props.children}
        </SContent>
      </div>
    );
  }
}

export default Accordion;
