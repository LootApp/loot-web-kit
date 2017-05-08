import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputRadioExample from "../../components/InputRadio";

const docs = `
  # InputRadioExample [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputEmailExample.js)
  ${"`import InputRadioExample from 'loot-web-kit/lib/InputRadioExample'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputRadioExample.js)

  Input for email string formating *Extends:* [Input](/styleguide/components/input)
`;

const props = `
  # Props

  **prefix**: string

  Currency symbol. *Default:* "£"
`;

const code = `
  <div style={{ height: "100%", "borderRadius": "5px",background: "#F2F2F2", padding: "20px 0" }}>
    <div style={{ margin: "10px" }}>

      <InputRadioExample
        name="title"
        labels={["mr", "mrs", "ms", "miss"]}
      />

    </div>
    <div style={{ margin: "10px" }}>

      <InputRadioExample
        name="gender"
        labels={["male", "female"]}
      />

    </div>
  </div>
`;

class InputRadioExampleExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputRadioExample }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputRadioExampleExample;
