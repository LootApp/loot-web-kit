import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import Input from "./components/Input";

// eslint-disable-next-line
injectGlobal`
  html, body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

class App extends Component {
  render() {
    return <Input />;
  }
}

export default App;
