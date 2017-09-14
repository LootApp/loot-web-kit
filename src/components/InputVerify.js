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
    onChange: PropTypes.func,
    innerRef: PropTypes.func
  };

  static defaultProps = {
    fields: 4,
    onChange: null,
    innerRef: null
  };

  state = {
    inputs: {},
    verifyCode: [],
    error: true
  };

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
        this.setState({
          verifyCode: [...this.state.verifyCode, ([field.id]: field.value)]
        });
        this.props.onChange(this.state.verifyCode.join(""));
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
    this.state.verifyCode[id] = this[`input${id}`].value;
    this.props.onChange(this.state.verifyCode.join(""));
    this.setState({
      error: !(this.state.verifyCode.join("").length === this.props.fields)
    });
  };

  _setInput = (input, i) => {
    this[`input${i}`] = input;
    this.state.inputs[`input${i}`] = input;
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

  // eslint-disable-next-line
  _reset = () => {
    for (let i = 0; i < Object.keys(this.state.inputs).length; i += 1) {
      this.state.inputs[Object.keys(this.state.inputs)[i]].value = "";
    }
  };

  _error = () => this.state.error;

  _getRef = elm => {
    typeof this.props.innerRef === "function"
      ? this.props.innerRef({
          _reset: this._reset,
          _error: this._error,
          element: this.state.inputs
        })
      : elm;
  };

  render() {
    const { onChange, innerRef, ...props } = this.props;
    return (
      <SContainer innerRef={this._getRef} {...props}>
        {this._createField(this.props.fields)}
      </SContainer>
    );
  }
}

export default InputVerify;
