import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputExpDate from "../../../../src/components/InputExpDate";

const docs = `
  # InputExpDate [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputExpDateExample.js)
  ${"`import { InputExpDate } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputExpDate.js)

  Input for debit/credit card expiry date *Extends:* [Input](/loot-web-kit/components/input)
`;

const code = `
  <InputExpDate
    label='MM/YY'
    placeholder="12/19"
  />
`;

class InputExpDateExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputExpDate }} code={code} />
      </div>
    );
  }
}

export default InputExpDateExample;
