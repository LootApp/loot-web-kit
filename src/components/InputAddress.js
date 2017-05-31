import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Input from "./Input";
import countries from "../helpers/countries.json";

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

const SContainer = styled.div`
  display: flex;
  padding: 15px;
  position: relative;
  justify-content: center;
  align-items: flex-end;
`;

const SListContainer = styled.div`
  max-height: 160px;
  width: calc(100% - 40px);
  left: 25px;
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

const SItemText = styled.span`
  font-size: 1.1em;
  text-overflow: ellipsis;
  span { font-Weight: 600 }
`;

class InputAddress extends Component {

  state = { addressList: "closed", selected: 0, address: "" };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (event) => {
    const countryList = document.getElementById("address-list").children;
    switch (event.key) {
      case "Escape":
      case "Tab":
      case "Enter":
        this.closeList();
        break;
      case "ArrowUp":
        this.setAddress(this.state.selected - 1, false);
        break;
      case "ArrowDown":
        this.setAddress(this.state.selected + 1, false);
        break;
      default:
    }
    if (!event.key.replace(/^[a-zA-Z]+$/g, "") && this.state.addressList === "open") {
      for (let i = 0; i < countryList.length; i += 1) {
        if (countryList[i].getAttribute("data-country-name").substring(0, 1).toLowerCase().indexOf(this.state.address.toLowerCase()) > -1) {
          countryList[i].scrollIntoView();
          return;
        }
      }
    }
  }

  setAddress = (index, shouldClose) => {
    const countryList = document.getElementById("address-list").children;
    if ((index >= 0 && index < countryList.length)) {
      this.setState({
        selected: index,
        addressList: shouldClose ? "closed" : "open",
        address: countryList[index].getAttribute("data-country-name")
      });
      countryList[index].scrollIntoView();
    }
    console.log('QUICK CHECK', this.state.address);
  }

  _onFocus = () => this.openList();
  _onBlur = () => this.closeList();

  _onChange = value => {
    this.openList();
    if (typeof value === "string") {
      this.setState({ address: value });
      this.state.address = value;
    }
    return this.state.address;
  }

  closeList = () => {
    this.state.addressList === "open" &&
    this.setState({ addressList: "closed" });
  }

  openList = () => {
    this.state.addressList === "closed" &&
    this.setState({ addressList: "open" });
  }

  render() {
    console.log(this.state.address);
    return (
      <SContainer>
        <SInput
          {...this.props}
          type="tel"
          value={this.state.address}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          noValidate
          innerRef={input => (this.input = input)}
        />
        <SListContainer id="address-list" isOpen={this.state.addressList}>
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
                onClick={() => { this.setAddress(index, true); }}
              >
                <SItemText>{`${country.name} `} <b>{country.dial_code}</b></SItemText>
              </SItem>
              )
            )
          }
        </SListContainer>
      </SContainer>
    );
  }
}

export default InputAddress;
