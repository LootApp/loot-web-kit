import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import LiveEditor from "./utilities/LiveEditor";
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
    return (
      <div>
        <LiveEditor scope={{ Input }} code="<Input />" />
      </div>
    );
  }
}

export default App;
