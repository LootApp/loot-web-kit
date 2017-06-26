import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import Button from "../../../../src/components/Button";

const docs = `
  # Button [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/Button.js)
  ${"`import { Button } from 'loot-web-kit/es'`"}
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
  <div style={{ margin: "10px" }}>
    <Button outline rippleColour="rgba(77, 183, 195, 0.25)">
      Press me
    </Button>
  </div>
  <div style={{ margin: "10px" }}>
    <Button disabled>
      Can't press me
    </Button>
  </div>
  <div style={{ margin: "10px" }}>
    <Button loading>
      I am loading
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

  ---

  **outline**: bool

  Gives button outlined style, don't forget to add rippleColour. *Default:* false

  ---

  **rippleColour**: colour string

  Specifies ripple effect colour. *Default:* rgba(255, 255, 255, 0.25)

  ---

  **disabled**: bool

  Disables the button. *Default:* false

  ---

  **loading**: bool

  Puts button into a loading state. *Default:* false
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
