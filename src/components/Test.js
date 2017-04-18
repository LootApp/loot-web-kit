import React, { Component } from 'react';
import styled from 'styled-components';

const SDiv = styled.div`
  background-color: red;
`;

class TEST extends Component {
  render() {
    return (<SDiv>Hello World!</SDiv>);
  }
}

export default TEST;
