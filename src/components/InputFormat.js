import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import stringFormatter from "../utilities/stringFormatter";

class InputFormat extends Component {
  static propTypes = {
    getRef: PropTypes.func,
    numbersOnly: PropTypes.bool,
    delimiter: PropTypes.string,
    occurance: PropTypes.number
  };

  static defaultProps = {
    getRef: null,
    numbersOnly: false,
    delimiter: "",
    occurance: 0
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  _onChange = value =>
    stringFormatter({
      value: this.props.numbersOnly ? value.toString().replace(/[^0-9-]/g, "") : value,
      delimiter: this.props.delimiter,
      occurance: this.props.occurance
    });

  _value = () => this.input._value();

  render() {
    const { ...props } = this.props;
    return (
      <Input
        {...props}
        noValidate
        onChange={this._onChange}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputFormat;
