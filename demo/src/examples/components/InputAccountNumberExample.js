import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputAccountNumber from "../../../../src/components/InputAccountNumber";

const docs = `
  # InputAccountNumber [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputAccountNumberExample.js)
  ${"`import { InputAccountNumber } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputAccountNumber.js)

  Input for account number string formating *Extends:* [Input](/loot-web-kit/components/input)
`;

const code = `
  <InputAccountNumber
    label='Account number'
    placeholder="34343436"
  />
`;

class InputAccountNumberExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputAccountNumber }} code={code} />
      </div>
    );
  }
}

export default InputAccountNumberExample;
