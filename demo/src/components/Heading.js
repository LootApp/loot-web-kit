import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SHeading = styled.h1`
  margin-bottom: 50px;
`;

class Heading extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired
  };

  render() {
    return <SHeading>{this.props.children}</SHeading>;
  }
}

export default Heading;
