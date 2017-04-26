import React, { Component } from "react";
import Input from "./Input";

class InputPassword extends Component {
  render() {
    const { ...props } = this.props;
    return <Input type="password" {...props} />;
  }
}

export default InputPassword;
