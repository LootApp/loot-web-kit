import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputEmail from "../../../../src/components/InputEmail";

const docs = `
  # InputEmail [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputEmailExample.js)
  ${"`import InputEmail from 'loot-web-kit/lib/InputEmail'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputEmail.js)

  Input for email string formating *Extends:* [Input](/styleguide/components/input)
`;

const code = `
  <InputEmail
    label='Email'
  />
`;

class InputEmailExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputEmail }} code={code} />
      </div>
    );
  }
}

export default InputEmailExample;
