import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { flag } from "country-code-emoji";
import emoji from "react-easy-emoji";
import Input from "./Input";
import countries from "../helpers/countries.json";
import dropDownIconFill from "../assets/drop_down_fill.svg";
import dropDownIconNoFill from "../assets/drop_down_no_fill.svg";

const fadeIn = keyframes`
  0% { transform: translateY(-10px); opacity: 0;}
  100% { transform: translateY(0); opacity: 1; visibility: visible; }
`;

const fadeOut = keyframes`
  0% { transform: translateY(0); opacity: 1; visibility: visible; }
  100% { transform: translateY(-10px); opacity: 0; visibility: hidden; }
`;

const SInput = styled(Input)`
  width: 100%;
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
  transition: all 0.2s ease;
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  background-image: ${({ isOpen }) => isOpen ? `url(${dropDownIconNoFill})` : `url(${dropDownIconFill})`};
`;

const FlagPlaceholder = styled.div`
  width: 150px;
  height: 35px;
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-bottom: 1px solid #C6C6C6;
  transition: all 0.15s ease;
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
    background-color: #4db7c3;
    transition: all 0.2s ease;
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
  z-index: 2;
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
  color: ${({ selected }) => selected ? "#4db7c3" : "#8C8D8F"};
  padding: 0 5px;
  cursor: pointer;
  font-size: 0.8em;
  align-items: center;
  transition: all 0.05s ease;
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

  state = { dialCodeList: "", flag: emoji(flag("GB")), dialCode: "+44", selected: 0 };

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
      this.closeList();
    }
  }

  onKeyDown = (event) => {
    const countryList = document.getElementById("code-list").children;
    switch (event.key) {
      case "Escape":
      case "Tab":
      case "Enter":
        this.closeList();
        break;
      case "ArrowUp":
        this.setCountry(this.state.selected - 1, false);
        break;
      case "ArrowDown":
        this.setCountry(this.state.selected + 1, false);
        break;
      default:
    }
    if (!event.key.replace(/^[a-zA-Z]+$/g, "") && this.state.dialCodeList === "open") {
      for (let i = 0; i < countryList.length; i += 1) {
        if (countryList[i].getAttribute("data-country-name").substring(0, 1).toLowerCase() === event.key.toLowerCase()) {
          this.setCountry(i);
          return;
        }
      }
    }
  }

  setCountry = (index, shouldClose) => {
    const countryList = document.getElementById("code-list").children;
    if ((index >= 0 && index < countryList.length) && this.state.dialCodeList === "open") {
      this.setState({
        flag: emoji(flag(countryList[index].getAttribute("data-country-code"))),
        dialCode: countryList[index].getAttribute("data-country-dial-code"),
        dialCodeList: shouldClose ? "closed" : "open",
        selected: index
      });
      countryList[index].scrollIntoView();
    }
  }

  _onChange = value => {
    if (typeof value === "string") {
      return value.replace(/[^0-9-]/g, "");
    }
  }

  toggleList = () => {
    this.setState((prevState) => {
      if (prevState.dialCodeList === "open") {
        return { dialCodeList: "closed" };
      }
      return { dialCodeList: "open" };
    });
  }

  closeList = () => {
    this.state.dialCodeList === "open" &&
    this.setState({ dialCodeList: "closed" });
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
          type="tel"
          noValidate
          onChange={this._onChange}
          innerRef={input => (this.input = input)}
        />
        <SListContainer id="code-list" isOpen={this.state.dialCodeList}>
          {
            countries.map((country, index) => (
              <SItem
                selected={index === this.state.selected}
                data-index={index}
                data-country-name={`${country.name}`}
                data-country-code={`${country.code}`}
                data-country-dial-code={`${country.dial_code}`}
                className="dial-code-element"
                key={`${country.dial_code}-${country.name}`}
                onClick={() => { this.setCountry(index, true); }}
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
