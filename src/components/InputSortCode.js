import React from "react";
import Input from "./InputFormat";

const InputSortCode = props =>
  <Input {...props} type="tel" maxLength={8} delimiter="-" occurance={2} />;

export default InputSortCode;
