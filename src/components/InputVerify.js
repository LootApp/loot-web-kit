import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SContainer = styled.div`flex: 1;`;

const SInputVerify = styled.input`
  padding: 20px 15px;
  letter-spacing: 1px;
  width: 50px;
  height: 50px;
  font-size: 1.2em;
  margin: 10px;
  border: 1px solid #dedede;
  text-align: center;
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.6);
  background: rgb(255, 255, 255);
  transition: all 0.2s ease;
  box-shadow: 0 10px 50px rgba(50, 50, 93, 0.12), 0 10px 20px rgba(50, 50, 93, 0.1);

  &:focus {
    outline: none;
    border: 1px solid #00c9c4;
  }
`;

class InputVerify extends Component {
  static propTypes = {
    fields: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    fields: 4,
    onChange: null
  };

  constructor() {
    super();
    this.verifyCode = [];
    this.inputs = [];
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.which === 8) {
      const field = document.activeElement;
      if (field.value) {
        field.value = "";
        this.verifyCode[field.id] = field.value;
        this.props.onChange(this.verifyCode.join(""));
      } else {
        field.id > 1 && this[`input${parseInt(field.id - 1, 0)}`].focus();
      }
    }
  };

  _onChange = ({ target }) => {
    const { value, id } = target;
    if (value) {
      this[`input${id}`].value = value
        .replace(/[^0-9]/g, "")
        .substring(value.length - 1, value.length);

      if (id <= this.props.fields - 1 && !!value.replace(/[^0-9]/g, ""))
        this[`input${parseInt(id, 0) + 1}`].focus();
    }
    this.verifyCode[id] = this[`input${id}`].value;
    this.props.onChange(this.verifyCode.join(""));
  };

  _setInput = (input, i) => {
    this[`input${i}`] = input;
    this.inputs.push(this[`input${i}`]);
  };

  _createField = numberOfFields => {
    const fields = [];
    for (let i = 1; i <= numberOfFields; i += 1) {
      fields.push(
        <SInputVerify
          key={`Field-${i}`}
          type="tel"
          id={i}
          noValidate
          onChange={this._onChange}
          innerRef={input => this._setInput(input, i)}
        />
      );
    }

    return fields;
  };

  _reset = () => this.inputs.map(input => (input.value = ""));

  render() {
    this._reset();
    console.log(this);
    const { onChange, ...props } = this.props;
    return (
      <SContainer {...props}>
        {this._createField(this.props.fields)}
      </SContainer>
    );
  }
}

export default InputVerify;
