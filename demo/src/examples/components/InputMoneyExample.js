import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputMoney from "../../../../src/components/InputMoney";

const docs = `
  # InputMoney [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputMoneyExample.js)
  ${"`import { InputMoney } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputMoney.js)

  Input for money string formating *Extends:* [Input](/loot-web-kit/components/input)
`;

const props = `
  # Props

  **prefix**: string

  Currency symbol. *Default:* "£"

  ---

  **balance**: string

  Balance amount for displaying remaining amount. *Default:* ""

  ---

  **minAmount**: number

  Minimum required amount. *Default:* null

`;

const code = `<div>
  <InputMoney
    label='Amount'
    placeholder='0.00'
    prefix="£"
    minAmount={5.00}
    onChange={e => console.log(e)}
    getRef={e => console.log(e)}
    onBlur={e => console.log(e)}
  />
  <InputMoney
    label='Amount with remaining balance'
    placeholder='0.00'
    prefix="£"
    balance="100.00"
  />
</div>`;

class InputMoneyExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputMoney }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputMoneyExample;
