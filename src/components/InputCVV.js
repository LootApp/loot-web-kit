import React from "react";
import Input from "./InputFormat";

const InputCVV = props => <Input {...props} type="tel" maxLength={3} numbersOnly />;

export default InputCVV;
