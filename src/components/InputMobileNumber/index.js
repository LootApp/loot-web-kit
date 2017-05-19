import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { flag } from "country-code-emoji";
import emoji from "react-easy-emoji";
import Input from "../Input";
import countries from "./lib/countries.json";
import dropDownIconFill from "./assets/drop_down_fill.svg";
import dropDownIconNoFill from "./assets/drop_down_no_fill.svg";
import { colours, transitions } from "../../Constants";

const fadeIn = keyframes`
  0% { transform: translateY(-10px); opacity: 0;}
  100% { transform: translateY(0); opacity: 1; visibility: visible; }
`;

const fadeOut = keyframes`
  0% { transform: translateY(0); opacity: 1; visibility: visible; }
  100% { transform: translateY(-10px); opacity: 0; visibility: hidden; }
`;

const SInput = styled(Input)`
  flex-grow: 1;
  padding-left: 10px;
`;

const SFlagInputContainer = styled.div`
  display: flex;
  width: 120px;
  height: 50px;
  position: relative;
  align-items: flex-end;
  justify-content: center;
`;

const SSpan = styled.span`
  width: 20px;
  height: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: ${transitions.long};
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  background-image: ${({ isOpen }) => isOpen ? `url(${dropDownIconNoFill})` : `url(${dropDownIconFill})`};
`;

const FlagPlaceholder = styled.div`
  max-width: 100px;
  height: 35px;
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-bottom: 1px solid #C6C6C6;
  transition: ${transitions.base};
  span { padding: 0 5px; }
  &:hover { border-color: #7C7C7C; }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: ${({ isOpen }) => (isOpen ? "100%" : "10%")};
    left: ${({ isOpen }) => (isOpen ? "0%" : "45%")};
    position: absolute;
    bottom: -2px;
    z-index: 0;
    background-color: ${colours.blue};
    transition: ${transitions.long};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }
`;

const SContainer = styled.div`
  display: flex;
  padding: 15px;
  position: relative;
  justify-content: center;
  align-items: flex-end;
`;

const SListContainer = styled.div`
  max-height: 160px;
  width: calc(100% - 30px);
  left: 15px;
  top: 90px;
  visibility: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  animation: ${({ isOpen }) => {
    if (isOpen === "open") return `${fadeIn} 0.2s ease 0s 1`;
    if (isOpen === "closed") return `${fadeOut} 0.2s ease 0s 1`;
  }};
  animation-fill-mode: forwards;
  background: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
`;

const SItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  color: #8C8D8F;
  padding: 0 5px;
  cursor: pointer;
  font-size: 0.8em;
  align-items: center;
  transition: ${transitions.fast};
  justify-content: space-between;
  &:nth-child(even) {
    background: #F7F7F8;
  }
  &:hover {
    color: #4db7c3;
  }
`;

const SCountryFlag = styled.span`
  font-size: 1.4em;
`;

const SCountryDialCode = styled.span`
  color: #8C8D8F;
  font-size: 1em;
  font-weight: 500;
`;

const SItemText = styled.span`
  font-size: 1.1em;
  text-overflow: ellipsis;
  span { font-Weight: 600 }
`;
class InputMobileNumber extends Component {

  state = { dialCodeList: "", flag: emoji(flag("GB")), dialCode: "+44" };

  componentDidMount() {
    document.addEventListener("click", this.onDocClick);
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onDocClick);
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onDocClick = ({ target }) => {
    if (target.className.indexOf("dial-code-element") < 0) {
      this.state.dialCodeList === "open" &&
      this.setState({ dialCodeList: "closed" });
    }
  }

  onKeyDown = (event) => {
    if (event.key === "Escape") {
      this.state.dialCodeList === "open" &&
      this.setState({ dialCodeList: "closed" });
    }
  }

  setCountry = (country) => {
    this.setState({
      flag: emoji(flag(country.code)),
      dialCode: country.dial_code,
      dialCodeList: "closed"
    });
  }

  toggleList = () => {
    this.setState((prevState) => {
      if (prevState.dialCodeList === "open") {
        return { dialCodeList: "closed" };
      }
      return { dialCodeList: "open" };
    });
  }

  render() {
    return (
      <SContainer>
        <SFlagInputContainer>
          <FlagPlaceholder
            className="dial-code-element"
            onClick={this.toggleList}
            isOpen={this.state.dialCodeList === "open"}
          >
            <SCountryFlag>{this.state.flag}</SCountryFlag>
            <SCountryDialCode>{this.state.dialCode}</SCountryDialCode>
          </FlagPlaceholder>
          <SSpan
            className="dial-code-element"
            isOpen={this.state.dialCodeList === "open"}
            onClick={this.toggleList}
          />
        </SFlagInputContainer>
        <SInput
          {...this.props}
          type="email"
          noValidate
          innerRef={input => (this.input = input)}
        />
        <SListContainer id="code-list" isOpen={this.state.dialCodeList}>
          {
            countries.map(country => (
              <SItem
                className="dial-code-element"
                key={`${country.dial_code}-${country.name}`}
                onClick={() => { this.setCountry(country); }}
              >
                <SItemText>{`${country.name} `} <b>{country.dial_code}</b></SItemText>
                <SCountryFlag>{emoji(flag(country.code))}</SCountryFlag>
              </SItem>
              )
            )
          }
        </SListContainer>
      </SContainer>
    );
  }
}

export default InputMobileNumber;
