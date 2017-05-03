import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputEmail from "../../components/InputEmail";

const docs = `
  # InputMoney [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputMoneyExample.js)
  ${"`import InputMoney from 'loot-web-kit/lib/InputMoney'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputMoney.js)

  Input for email string formating *Extends:* [Input](/styleguide/components/input)
`;

const props = `
  # Props

  **prefix**: string

  Currency symbol. *Default:* "£"
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
        <Description source={props} />
      </div>
    );
  }
}

export default InputEmailExample;
