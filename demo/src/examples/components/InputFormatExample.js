import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputFormat from "../../../../src/components/InputFormat";

const docs = `
  # InputFormat [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputFormatExample.js)
  ${"`import { InputFormat } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputFormat.js)

  Input for custom string formating (numbers only) *Extends:* [Input](/loot-web-kit/components/input)
`;

const props = `
  # Props

  **delimiter**: string

  Defines what delimiter will be appended for every occurance. **One Character Only** *Default:* ""

  ---

  **occurance**: number

  Defines the number characters between occurances. *Default:* 0
`;

const code = `
  <div>
  <InputFormat
    placeholder="12-34-56"
    label='Sort Code'
    maxLength={8}
    delimiter="-"
    occurance={2}
  />
  <InputFormat
    placeholder="35679876"
    label='Account Number'
    maxLength={8}
  />
  <InputFormat
    placeholder="12/19"
    label='MM/YY'
    maxLength={5}
    delimiter="/"
    occurance={2}
  />
  <InputFormat
    placeholder="347"
    label='CVV'
    maxLength={3}
  />
</div>
`;

class InputFormatExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputFormat }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputFormatExample;
