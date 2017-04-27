import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputCard from "../../components/InputCard";

const docs = `
  # InputCard [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputCardExample.js)
  ${"`import InputCard from 'loot-web-kit/lib/InputCard'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputCard.js)

  Input for card string formating *Extends:* [Input](/styleguide/components/input)
`;

const code = `<InputCard
  label='Card Number'
  placeholder='1234 1234 1234 1234'
/>`;

class InputCardExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputCard }} code={code} />
      </div>
    );
  }
}

export default InputCardExample;
