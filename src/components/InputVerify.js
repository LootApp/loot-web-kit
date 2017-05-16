import React, { Component, PropTypes } from "react";
import styled, { keyframes } from "styled-components";
import { transitions } from "../Constants";

const pulse = keyframes`
  0% { border: 2px solid transparent; }
  100% { border: 2px solid #00C9C4; }
`;

const SContainer = styled.div`
  flex: 1;
`;

const SInputVerify = styled.input`
  padding: 20px 15px;
  letter-spacing: 1px;
  width: 50px;
  height: 50px;
  font-size: 1.2em;
  margin: 10px;
  border: none;
  text-align: center;
  border-radius: 3px;
  color: rgba(0,0,0,0.6);
  transition: ${transitions.long};
  box-shadow: 0 10px 50px rgba(50,50,93,0.12), 0 10px 20px rgba(50,50,93,0.1);

  &:focus {
    outline: none;
    animation: ${pulse} 0.8s ease 0s 1;
    animation-fill-mode: forwards;
  }
`;

class InputVerify extends Component {
  static propTypes = {
    fields: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    fields: 4,
    onChange: verifyCode => verifyCode
  };

  state = { verifyCode: [] }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (event) => {
    if (event.which === 8) {
      const field = document.activeElement;
      if (field.value) {
        field.value = "";
        this.state.verifyCode[field.id] = field.value;
        this.props.onChange(this.state.verifyCode.join(""));
      } else {
        field.id > 1 && this[`input${parseInt(field.id - 1, 0)}`].focus();
      }
    }
  }

  _onChange = ({ target }) => {
    const { value, id } = target;
    if (value) {
      this[`input${id}`].value =
        value
        .replace(/[^0-9]/g, "")
        .substring(value.length - 1, value.length);

      if (id <= this.props.fields - 1 && !!value.replace(/[^0-9]/g, ""))
        this[`input${parseInt(id, 0) + 1}`].focus();
    }
    this.state.verifyCode[id] = this[`input${id}`].value;
    this.props.onChange(this.state.verifyCode.join(""));
  }

  _createField = (numberOfFields) => {
    const fields = [];
    for (let i = 1; i <= numberOfFields; i += 1) {
      fields.push(
        <SInputVerify
          key={`Field-${i}`}
          type="tel"
          id={i}
          noValidate
          onChange={this._onChange}
          innerRef={input => (this[`input${i}`] = input)}
        />
      );
    }

    return fields;
  }

  render() {
    return (
      <SContainer {...this.props}>
        {this._createField(this.props.fields)}
      </SContainer>
    );
  }
}

export default InputVerify;
