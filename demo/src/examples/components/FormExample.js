import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import Form from "../../../../src/components/Form";
import Button from "../../../../src/components/Button";
import InputEmail from "../../../../src/components/InputEmail";
import InputPassword from "../../../../src/components/InputPassword";

const docs = `
  # Form [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/FormExample.js)
  ${"`import Form from 'loot-web-kit/es/Form'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/Form.js)

  Component wrapper for form fields
`;

const code = `
  <Form onSubmit={() => { alert('Form Submitted!')}} style={{ height: "100%", "borderRadius": "5px", padding: "20px" }}>
    <h3 style={{ textAlign: 'center', }}>Login</h3>
    <InputEmail label="Email" />
    <InputPassword label="Password" />
    <Button fullWidth style={{ margin: "20px 0 0" }} />
  </Form>
`;

const props = `
  # Props

  **children**: element

  form input elements are expected as children. *Required*

  ---

  **onSubmit**: func

  onSubmit function to be passed the form. *Required*

`;

class InputEmailExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor
          scope={{ Form, InputEmail, InputPassword, Button }}
          code={code}
        />
        <Description source={props} />
      </div>
    );
  }
}

export default InputEmailExample;
