import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import InputExample from "./examples/InputExample";
import { colours } from "./Constants";

// eslint-disable-next-line
injectGlobal`
  html, body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`;

const Main = styled.main`
  position: relative;
  height: 100%;
`;

const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: rgb(${colours.blue});
  background-image:
    radial-gradient(
      circle farthest-corner at 0% 35%,
      #59bcc3,
      #35647f
    );
`;

const Content = styled.div`
  margin-left: 300px;
  padding: 3.5vw 5vw;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Sidebar />
        <Content>
          <InputExample />
        </Content>
      </Main>
    );
  }
}

export default App;
