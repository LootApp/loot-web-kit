import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputPassword from "../../../../src/components/InputPassword";

const docs = `
  # InputPassword [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputPassword.js)
  ${"`import { InputPassword } from 'loot-web-kit/es'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputPassword.js)

  Input for password string formating *Extends:* [Input](/loot-web-kit/components/input)
`;

const props = `
  # Props

  **requirementColour**: string

  Colour for requirement icons. *Default:* Loot blue

  ---

  **requirements**: bool

  Flag to pass if password requirements should be shown. *Default:* false
`;

const code = `
<div>
  <InputPassword
    label='Password'
    placeholder='Smurf'
    onBlur={e => console.log(e)}
    getRef={input => console.log("YOL", input)}
  />
  <InputPassword
    label='Password'
    placeholder='Smurf'
    requirements
    onBlur={e => console.log(e)}
    getRef={input => console.log("YOL", input)}
  />
  <InputPassword
    label='Password'
    placeholder='Smurf'
    colour="magenta"
    requirementColour="magenta"
    requirements
    onBlur={e => console.log(e)}
    getRef={input => console.log("YOL", input)}
  />
</div>
`;

class InputPasswordExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputPassword }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputPasswordExample;
