import React, { Component } from "react";
import Input from "../../../../src/components/Input";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";

const docs = `
  # Input [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputExample.js)
  ${"`import Input from 'loot-web-kit/es/Input'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/Input.js)

  A foundational component for inputting text into the app via a keyboard.
  Props provide configurability for several features, such as capitalisation,
  placeholder text etc..
`;

const props = `
  # Props

  **label**: string  [*Required* ]

  Label for the input. *Default:* ""

  ---

  **value**: string

  Initial value for the input. *Default:* ""

  ---

  **placeholder**: string

  Placeholder text for the input. *Default:* ""

  ---

  **required**: bool

  Indicates if input is required. *Default:* false

  ---

  **minLength**: number

  Minimum lenght required for the input. *Default:* 0

  ---

  **maxLength**: number

  Maximum lenght required for the input. *Default:* 9999

  ---

  **counter**: bool

  Displays character counter. *Default:* false

  ---

  **helperText**: string

  Small helper text, appears below the nput. *Default:* ""

  ---

  **upercase**: bool

  Makes text within the input uppercased. *Default:* false

  ---

  **capitalise**: bool

  Makes text within the input capitalised. *Default:* false

  ---

  **disabled**: bool

  Disables the input and styles it accordingly. *Default:* false

  ---

  **onChange**: func(value)

  Custom onChange handler that can be passed from above InputType component in order to
  format value, must take in value that will be passed from default Input. *Default:* null

  ---

  **innerRef**: func

  Refference to original input in DOM i.e. to get value. written as

  ${"`innerRef={input => this._nameInput = input}`"}

  *Default:* null

  ---

  **onBlur**: func(value)

  Custom onChange handler that can be passed from above InputType component in order to
  validate value, must take in value that will be passed from default Input. *Default:* null

  ---

  **colour**: string

  Customisable label and focused underline colour, can be any valid css colour string
  *Default:* Loot blue

  # Helpers

  **_value**: func

  Helper function to get value of the component i.e. when importing component
  into the project add ref to it like this:

  ${"`<Input ref={input => this.input = input}`"}

  And you can now get inputs value on form submission using

  ${"`this.input._value()`"}
`;

const code = `<div>
  <Input
    label="Default field"
    placeholder="Default"
  />
  <Input
    label="Required field"
    required
    placeholder="Required"
  />
  <Input
    label="Minimum length field"
    minLength={5}
    placeholder="Minimum length"
  />
  <Input
    label="Maximum length field"
    maxLength={5}
    placeholder="Maximum length"
  />
  <Input
    label="Field with character counter"
    maxLength={30}
    counter
    placeholder="Character counter"
  />
  <Input
    label="Field with helper text"
    helperText="Use common sense"
    placeholder="Helper text"
  />
  <Input
    label="Uppercase text field"
    uppercase
    placeholder="Uppercase text"
  />
  <Input
    label="Capitalised text field"
    capitalise
    placeholder="Capitalised text"
  />
  <Input
    label="Disabled field"
    disabled
    placeholder="Disabled"
  />
  <Input
    label="Coloured field"
    placeholder="Coloured"
    colour="magenta"
  />
</div>`;

class InputExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ Input }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputExample;
