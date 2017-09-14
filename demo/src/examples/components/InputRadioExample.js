import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputRadio from "../../../../src/components/InputRadio";

const docs = `
  # InputRadioExample [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputRadioExample.js)
  ${"`import { InputRadio } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputRadio.js)
`;

const props = `
  # Props

  **labels**: array

  expects an array of strings to label the radio button. *Required:*

  ---

  **name**: string

  defines the name of the group of radio buttons. *Required:*

  ---

  **getRef**: func

  Refference to original inputs in DOM i.e. to get value. written as

  ${"`getRef={input => this._nameInput = input}`"}
  ${"`console.log(this._nameInput) // { element:object, _reset:func, _error:func }`"}

  *Default:* null

  ---

  # Helpers

  when importing component into the project add ref to it like this:

  ${"`<Input getRef={input => this.input = input}`"}

  ---

  **element**: func

  A reference to all the inputs that have been generated

  ${"`this.input.element.input[number]`"}

  ---

  **_reset**: func

  A helper function that allows you to clear the radio buttons reseting it back to ${"`checked: false`"}

  ${"`this.input._reset()`"}

  ---

  **_error**: func

  A helper function that allows you to check whether the input currently has an error

  i.e if all inputs have not been completed

  ${"`this.input._error()`"}
`;

const code = `
  <div style={{ height: "100%", "borderRadius": "5px",background: "#F2F2F2", padding: "20px 0" }}>
    <div style={{ margin: "10px" }}>

      <InputRadio
        name="title"
        labels={["mr", "mrs", "ms", "miss"]}
        onChange={e => console.log("onChange", e)}
        getRef={e => console.log("getRef", e)}
      />

    </div>
    <div style={{ margin: "10px" }}>

      <InputRadio
        name="gender"
        labels={["male", "female"]}
      />

    </div>
  </div>
`;

class InputRadioExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputRadio }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputRadioExample;
