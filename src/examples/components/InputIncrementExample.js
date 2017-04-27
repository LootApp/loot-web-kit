import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputIncrement from "../../components/InputIncrement";

const docs = `
  # InputIncrement [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputIncrementExample.js)
  ${"`import InputIncrement from 'loot-web-kit/lib/InputIncrement'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputIncrement.js)

  Input for money incrementing
`;

const props = `
  # Props

  **prefix**: string

  Currency symbol. *Default:* "£"

  ---

  **maxLength**: number
  
  Maximum input length. *Default*: 10
`;

const code = `<InputIncrement
  prefix="$"
/>`;

class InputExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputIncrement }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputExample;