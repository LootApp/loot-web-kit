import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputVerify from "../../../../src/components/InputVerify";

const docs = `
  # InputVerify [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputVerifyExample.js)
  ${"`import { InputVerify } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputVerify.js)
`;

const props = `
  # Props

  **fields**: number

  number of fields required. *Default:* 4

  ---

  **innerRef**: func

  Refference to original inputs in DOM i.e. to get value. written as

  ${"`innerRef={input => this._nameInput = input}`"}
  ${"`console.log(this._nameInput) // { element:object, _reset:func, _error:func }`"}

  *Default:* null

  ---

  # Helpers

  when importing component into the project add ref to it like this:

  ${"`<Input innerRef={input => this.input = input}`"}

  ---

  **element**: func

  A reference to all the inputs that have been generated

  ${"`this.input.element.input[number]`"}

  ---

  **_reset**: func

  A helper function that allows you to clear the input reseting it back to ${"`''`"}

  ${"`this.input._reset()`"}

  ---

  **_error**: func

  A helper function that allows you to check whether the input currently has an error

  i.e if all inputs have not been completed

  ${"`this.input._error()`"}

`;

const code = `
  <InputVerify
    fields={5}
    innerRef={(ref) => console.log(ref) }
    onChange={(verifyCode) => console.log(verifyCode) }
  />
`;

class InputVerifyExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputVerify }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputVerifyExample;
