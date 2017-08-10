import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Input from "./Input";

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
`;

const SContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
`;

const SListContainer = styled.div`
  max-height: 160px;
  width: 100%;
  top: 60px;
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
  color: ${({ selected }) => (selected ? "#4db7c3" : "#8C8D8F")};
  padding: 0 5px;
  cursor: pointer;
  font-size: 0.8em;
  align-items: center;
  transition: all 0.05s ease;
  justify-content: space-between;
  &:nth-child(even) {
    background: #f7f7f8;
  }
  &:hover {
    color: #4db7c3;
  }
`;

const SItemText = styled.span`
  font-size: 1.1em;
  text-overflow: ellipsis;
  span {
    font-Weight: 600;
  }
`;

class InputAddress extends Component {
  static propTypes = {
    formatAddress: PropTypes.func.isRequired,
    addresses: PropTypes.array,
    onChange: PropTypes.func,
    getRef: PropTypes.func
  };

  static defaultProps = {
    formatAddress: address => address.first_line,
    addresses: [],
    onChange: null,
    getRef: null
  };

  state = { addressListStatus: "", selected: 0, address: "" };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = event => {
    const addressList = document.getElementById("address-list").children;
    switch (event.key) {
      case "Escape":
      case "Tab":
        this.closeList();
        break;
      case "Enter":
        this.setAddress(this.state.selected, true);
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
        if (
          addressList[i]
            .getAttribute("data-address")
            .toLowerCase()
            .indexOf(this.input._value().toLowerCase()) > -1
        ) {
          addressList[i].scrollIntoView();
          this.setState({ selected: i });
          return;
        }
      }
    }
  };

  setAddress = (index, shouldClose) => {
    const addressList = document.getElementById("address-list").children;
    if (index >= 0 && index < addressList.length) {
      this.setState({
        selected: index,
        addressListStatus: shouldClose ? "closed" : "open"
      });
      addressList[index].scrollIntoView();
      this.input._updateValue(addressList[index].getAttribute("data-address").trim());
    }
  };

  _onBlur = () => this.closeList();

  _onChange = value => {
    if (!value) this.closeList();
    !!this.props.onChange && this.props.onChange(value);
    return value;
  };

  closeList = () => {
    (this.state.addressListStatus === "open" || this.state.addressListStatus === "") &&
      this.setState({ addressListStatus: "closed" });
  };

  openList = () => {
    (this.state.addressListStatus === "closed" || this.state.addressListStatus === "") &&
      this.setState({ addressListStatus: "open" });
  };

  render() {
    const { addresses, formatAddress, onChange, ...props } = this.props;
    return (
      <SContainer {...props}>
        <SInput
          {...props}
          type="tel"
          noValidate
          onBlur={this._onBlur}
          onChange={this._onChange}
          onKeyDown={() => this.openList()}
          innerRef={input => (this.input = input)}
        />
        <SListContainer id="address-list" isOpen={this.state.addressListStatus}>
          {addresses.map((address, index) =>
            <SItem
              key={formatAddress(address)}
              data-index={index}
              data-address={formatAddress(address)}
              selected={index === this.state.selected}
              onClick={() => {
                this.setAddress(index, true);
              }}
            >
              <SItemText>
                {formatAddress(address)}
              </SItemText>
            </SItem>
          )}
        </SListContainer>
      </SContainer>
    );
  }
}

export default InputAddress;
