import React, { Component } from "react";
import Input from "../components/Input";
import LiveEditor from "../utilities/LiveEditor";
import Description from "../utilities/Description";

const docs = `
  ## Input
  What sort of magic is this?

  ${" `import Input from 'loot-web-kit/lib/Input'` "}
`;

const code = `
  <Input
    label="Example"
    value="String"
    placeholder="String"
  />
`;

class InputExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ Input }} code={code} />
      </div>
    );
  }
}

export default InputExample;
