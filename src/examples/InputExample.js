import React, { Component } from "react";
import Input from "../components/Input";
import LiveEditor from "../utilities/LiveEditor";
import Description from "../utilities/Description";

const docs = `
  # Input
  ${"`import Input from 'loot-web-kit/lib/Input'`"}

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

  **helperText**: string

  Small helper text, appears below the nput. *Default:* ""

  ---

  **upercase**: bool

  Makes text within the input uppercased. *Default:* false

  ---

  **capitalise**: bool

  Makes text within the input capitalised. *Default:* false
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
    label="Field with helper text"
    helperText="Use common sense"
    placeholder="Helper text"
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
