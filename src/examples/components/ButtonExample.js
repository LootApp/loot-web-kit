import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import Button from "../../components/Button";

const docs = `
  # Button [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/Button.js)
  ${"`import Button from 'loot-web-kit/lib/Button'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/Button.js)

  Button to click on
`;

const code = `
<div>
  <div style={{ margin: "10px" }}>
    <Button onClick={() => alert("Hello Darknes My Old Friend!")}>
      Press me
    </Button>
  </div>
  <div style={{ margin: "10px" }}>
    <Button fullWidth>
      Press me
    </Button>
  </div>
  <div style={{ margin: "10px" }}>
    <Button colour="tomato">
      Press me
    </Button>
  </div>
</div>
`;

const props = `
  # Props

  **onClick**: func

  onClick function to be passed to the button. *Default:* null

  ---

  **fullWidth**: bool

  Specify if button should extend to width 100%. *Default:* false

  ---

  **colour**: css colour string

  Specifies colour of the button. *Default:* Loot blue
`;

class ButtonExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ Button }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default ButtonExample;
