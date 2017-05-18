import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Input from "../Input";
import countries from "./lib/countries.json";

const fadeIn = keyframes`
  0% { transform: translateY(-10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const fadeOut = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-10px); opacity: 0; }
`;

const SInput = styled(Input)`
  flex-grow: 1;
  padding-left: 10px;
  border: 1px solid black;
`;

const SFlagInputContainer = styled.div`
  display: flex;
  width: 100px;
  padding: 15px;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const SSpan = styled.span`
  width: 20px;
  height: 15px;
  margin-left: 10px;
  border: 1px solid black;
`;

const FlagPlaceholder = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
`;

const SContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid black;
`;
const SListContainer = styled.div`
  max-height: 100px;
  width: 70px;
  left: 52px;
  top: 95px;
  opacity: 0;
  overflow-y: scroll;
  position: absolute;
  animation: ${({ isOpen }) => {
    if (isOpen === "open") return `${fadeIn} 0.3s ease 0s 1`;
    if (isOpen === "closed") return `${fadeOut} 0.3s ease 0s 1`;
  }};
  animation-fill-mode: forwards;
  border: 1px solid black;
  background: white;
`;

const SItem = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid;
  &:nth-child(even) {
    background: #F7F7F8;
  }
`;

class InputMobileNumber extends Component {

  state = { open: "", countryCode: "" };

  render() {
    return (
      <SContainer>
        <SFlagInputContainer>
          <FlagPlaceholder><span>{this.state.countryCode}</span></FlagPlaceholder>
          <SSpan
            onClick={() => this.setState((prevState) => {
              if (prevState.open === "open") {
                return { open: "closed" };
              }
              return { open: "open" };
            })}
          />
        </SFlagInputContainer>
        <SInput
          {...this.props}
          type="email"
          noValidate
          onBlur={this._onBlur}
          innerRef={input => (this.input = input)}
        />
        <SListContainer isOpen={this.state.open}>
          {
            countries.map(country => (
              <SItem
                key={`${country.dial_code}-${country.name}`}
                onClick={() => { this.setState({ countryCode: country.code, open: "closed" }); }}
              >
                <span>{country.dial_code}</span>
              </SItem>
            ))
          }
        </SListContainer>
      </SContainer>
    );
  }
}

export default InputMobileNumber;
