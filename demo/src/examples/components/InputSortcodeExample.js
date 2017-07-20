import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputSortcode from "../../../../src/components/InputSortcode";

const docs = `
  # InputSortcode [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputSortcodeExample.js)
  ${"`import { InputSortcode } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputSortcode.js)

  Input for sort code string formating *Extends:* [Input](/loot-web-kit/components/input)
`;

const code = `
  <InputSortcode
    placeholder="12-34-56"
    label='Sort Code'
  />
`;

class InputSortcodeExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputSortcode }} code={code} />
      </div>
    );
  }
}

export default InputSortcodeExample;
