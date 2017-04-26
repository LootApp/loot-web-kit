import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputPassword from "../../components/InputPassword";

const docs = `
  # InputPassword [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputPassword.js)
  ${"`import InputPassword from 'loot-web-kit/lib/InputPassword'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputPassword.js)

  Input for password string formating *Extends:* [Input](/styleguide/components/input)
`;

const code = `<InputPassword
  label='Password'
  placeholder='Smurf'
/>`;

class InputExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputPassword }} code={code} />
      </div>
    );
  }
}

export default InputExample;
