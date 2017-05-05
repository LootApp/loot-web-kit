import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputSortcode from "../../components/InputSortcode";

const docs = `
  # InputSortcode [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputSortcodeExample.js)
  ${"`import InputSortcode from 'loot-web-kit/lib/InputSortcode'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputSortcode.js)

  Input for email string formating *Extends:* [Input](/styleguide/components/input)
`;

const props = `
  # Props

  **prefix**: string

  Currency symbol. *Default:* "£"
`;

const code = `
  <InputSortcode
    label='Sort Code'
  />
`;

class InputSortcodeExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputSortcode }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputSortcodeExample;
