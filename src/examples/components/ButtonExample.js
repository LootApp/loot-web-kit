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
<Button>
  Hello World
</Button>
`;

class ButtonExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ Button }} code={code} />
      </div>
    );
  }
}

export default ButtonExample;
