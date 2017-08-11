import React from "react";
import Input from "./InputFormat";

const InputExpDate = props =>
  <Input
    {...props}
    type="tel"
    maxLength={5}
    delimiter="/"
    occurance={2}
    numbersOnly
    getRef={input => (this.input = input)}
  />;

export default InputExpDate;
