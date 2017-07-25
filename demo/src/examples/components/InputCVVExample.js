import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputCVV from "../../../../src/components/InputCVV";

const docs = `
  # InputCVV [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputCVVExample.js)
  ${"`import { InputCVV } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputCVV.js)

  Input for debit/credit card cvv code *Extends:* [Input](/loot-web-kit/components/input)
`;

const code = `
  <InputCVV
    label='CVV'
    placeholder="337"
  />
`;

class InputCVVExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputCVV }} code={code} />
      </div>
    );
  }
}

export default InputCVVExample;
