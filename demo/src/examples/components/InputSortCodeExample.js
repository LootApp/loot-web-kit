import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputSortCode from "../../../../src/components/InputSortCode";

const docs = `
  # InputSortCode [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputSortCodeExample.js)
  ${"`import { InputSortCode } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputSortCode.js)

  Input for sort code string formating *Extends:* [Input](/loot-web-kit/components/input)
`;

const code = `
  <InputSortCode
    label='Sort Code'
    placeholder="23-43-36"
    onChange={(value) => console.log(value) }
  />
`;

class InputSortCodeExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputSortCode }} code={code} />
      </div>
    );
  }
}

export default InputSortCodeExample;
