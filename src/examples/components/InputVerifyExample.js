import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputVerify from "../../components/InputVerify";

const docs = `
  # InputVerify [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputVerifyExample.js)
  ${"`import InputVerify from 'loot-web-kit/lib/InputVerify'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputVerify.js)
`;

const props = `
  # Props

  **fields**: number

  number of fields required. *Default:* 4


`;

const code = `
  <InputVerify fields={5} />
`;

class InputVerifyExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputVerify }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputVerifyExample;
