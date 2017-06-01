import React, { Component } from "react";
import InputAddress from "../../../../src/components/InputAddress";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";

const docs = `
# InputAddress [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputAddressExample.js)
${"`import InputAddress from 'loot-web-kit/es/InputAddress'`"}
[![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputAddress.js)

Input for address string formating *Extends:* [Input](/loot-web-kit/components/input)
`;

const code = `
  <InputAddress
    addresses={[
      {
        first_line: "54-56 Flat 7",
        street: "Hornesy HighStreet",
        postcode: "N8 7NX"
      },
      {
        first_line: "Flat 9 Hyndman House",
        street: "Brecknock Road",
        postcode: "N19 5AX"
      }
    ]}
    label='Address'
  />
`;

class InputAddressExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputAddress }} code={code} />
      </div>
    );
  }
}

export default InputAddressExample;
