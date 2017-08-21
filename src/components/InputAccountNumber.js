import React from "react";
import Input from "./InputFormat";

const InputAccountNumber = props => <Input {...props} type="tel" maxLength={8} />;

export default InputAccountNumber;
