import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "./Input";
import isValidEmail from "../utilities/isValidEmail";

const SContainer = styled.div`
  display: flex;
`;

const SInput = styled(Input)`
  flex-grow: 1;
`;

class InputEmail extends Component {

  _onChange = (e) => {
    // const { value } = target;
    console.log(e.target.value);
    // console.log('YOLO', isValidEmail(value));
    // if (!!value.length && !isValidEmail(value))
    //   this.input.setState({
    //     error: true,
    //     helperText: "Invalid email address!"
    //   });
  }

  _value = () => this.input._value();

  render() {
    return (
      <SContainer>
        <SInput
          {...this.props}
          type="email"
          noValidate
          onChange={this._onChange}
          innerRef={input => (this.input = input)}
        />
      </SContainer>
    );
  }
}

export default InputEmail;
