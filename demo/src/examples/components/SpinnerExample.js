import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import Spinner from "../../../../src/components/Spinner";

const docs = `
  # Spinner [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/SpinnerExample.js)
  ${"`import { Spinner } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/Spinner.js)

  Loading indicator
`;

const code = `
  <div>
    <div style={{ margin: "10px" }}>
      <Spinner />
    </div>
    <div style={{ margin: "10px" }}>
      <Spinner colour="orange" />
    </div>
    <div style={{ margin: "10px" }}>
      <Spinner size="50px" />
    </div>
  </div>
`;

const props = `
  # Props

  **colour**: colour string

  Defines colour. *Default:* "#4db7c3"

  ---

  **size**: string

  Defines width and height. *Default:* "30px"

`;

class SpinnerExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ Spinner }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default SpinnerExample;
