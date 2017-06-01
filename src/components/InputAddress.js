import React, { Component } from "react";
import PropTypes from "prop-types";
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
  static propTypes = {
    addresses: PropTypes.array
  };

  static defaultProps = {
    addresses: []
  };

  state = { addressListStatus: "closed", selected: 0, address: "" };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (event) => {
    const addressList = document.getElementById("address-list").children;
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
    if (!event.key.replace(/^[a-zA-Z]+$/g, "") && this.state.addressListStatus === "open") {
      for (let i = 0; i < addressList.length; i += 1) {
        if (addressList[i].getAttribute("data-address").substring(0, 1).toLowerCase().indexOf(this.input._value().toLowerCase()) > -1) {
          addressList[i].scrollIntoView();
          return;
        }
      }
    }
  }

  setAddress = (index, shouldClose) => {
    const addressList = document.getElementById("address-list").children;
    if ((index >= 0 && index < addressList.length)) {
      this.setState({
        selected: index,
        addressListStatus: shouldClose ? "closed" : "open"
      });
      addressList[index].scrollIntoView();
      this.input.setState({ value: addressList[index].getAttribute("data-address").trim() });
    }
  }

  _onFocus = () => this.openList();
  _onBlur = () => this.closeList();

  closeList = () => {
    this.state.addressListStatus === "open" &&
    this.setState({ addressListStatus: "closed" });
  }

  openList = () => {
    this.state.addressListStatus === "closed" &&
    this.setState({ addressListStatus: "open" });
  }

  render() {
    const { addresses } = this.props;
    return (
      <SContainer>
        <SInput
          {...this.props}
          type="tel"
          noValidate
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          innerRef={input => (this.input = input)}
        />
        <SListContainer id="address-list" isOpen={this.state.addressListStatus}>
          {
            addresses.map((address, index) => (
              <SItem
                selected={index === this.state.selected}
                data-index={index}
                data-address-first-line={`${address.first_line}`}
                data-address-street={`${address.street}`}
                data-address-postcode={`${address.postcode}`}
                data-address={`${address.first_line}, ${address.street}, ${address.postcode}`}
                key={`${address.first_line}`}
                onClick={() => { this.setAddress(index, true); }}
              >
                <SItemText>{`${address.first_line}, ${address.street}, ${address.postcode}`}</SItemText>
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
