import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import InputRadio from "../../components/InputRadio";

const docs = `
  # InputRadioExample [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputRadioExample.js)
  ${"`import InputRadio from 'loot-web-kit/lib/InputRadio'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputRadio.js)
`;

const props = `
  # Props

  **labels**: array

  expects an array of strings to label the radio button. *Required:*

  ---

  # Props

  **name**: string

  defines the name of the group of radio buttons. *Required:*
`;

const code = `
  <div style={{ height: "100%", "borderRadius": "5px",background: "#F2F2F2", padding: "20px 0" }}>
    <div style={{ margin: "10px" }}>

      <InputRadio
        name="title"
        labels={["mr", "mrs", "ms", "miss"]}
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
