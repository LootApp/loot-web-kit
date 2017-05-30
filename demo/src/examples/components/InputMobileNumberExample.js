import React, { Component } from "react";
import Input from "../../../../src/components/InputMobileNumber";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";

const docs = `
  # InputMobileNumber [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputMobileNumberExample.js)
  ${"`import InputMobileNumber from 'loot-web-kit/lib/InputMobileNumber'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputMobileNumber.js)

  Input for mobile number string formating *Extends:* [Input](/styleguide/components/input)
`;

const code = `
  <InputMobileNumber
    label='Mobile Number'
  />
`;

class InputEmailExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputMobileNumber }} code={code} />
      </div>
    );
  }
}

export default InputEmailExample;
