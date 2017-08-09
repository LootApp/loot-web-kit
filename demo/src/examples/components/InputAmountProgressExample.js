import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputAmountProgress from "../../../../src/components/InputAmountProgress";

const docs = `
  # InputAmountProgress [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputAmountProgressExample.js)
  ${"`import { InputAmountProgress } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputAmountProgress.js)

  Input for amount with progress bar indicator
`;

const props = `
  # Props

  **prefix**: string

  Currency symbol. *Default:* "£"

  ---

  **label**: string

  Label for the input. **Required**

  ---

  **limit**: number

  The amount limit **Required**

  ---

  **remaining**: number

  The amount of the limit thats remaining  **Required**

  ---

  **onChange**: function

  Function executed by the component within its onChange handler and passes through formatted string value. *Default:* null
`;

const code = `<div>
  <InputAmountProgress
    prefix="£"
    label="Amount"
    limit={250}
    remaining={250}
    textAbove="New bal. ..."
    textBelow="... of £250 weekly limit remaining"
    onChange={(e) => { console.log(e) }}
  />
</div>`;

class InputAmountProgressExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputAmountProgress }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputAmountProgressExample;
