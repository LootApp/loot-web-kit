import React, { Component } from "react";
import LiveEditor from "../../elements/LiveEditor";
import Description from "../../elements/Description";
import Form from "../../components/Form";

const docs = `
  # Form [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/FormExample.js)
  ${"`import Form from 'loot-web-kit/lib/Form'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/Form.js)

  Component wrapper for form fields
`;

const code = `
  <Form onSubmit={this._onSubmit}>
    
  </Form>
`;

class InputEmailExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ Form }} code={code} />
      </div>
    );
  }
}

export default InputEmailExample;
