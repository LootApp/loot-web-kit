import React, { Component } from "react";
import styled from "styled-components";
import ClipboardButton from "react-clipboard.js";
import Heading from "../../components/Heading";
import copy from "../../assets/copy.svg";
import copyDark from "../../assets/copy-dark.svg";
import { colours } from "../../Constants";

const ColourBlock = styled.div`
  border-radius: 3px;
  padding: 15px 20px 14px;
  width: 20%;
  min-width: 192px;
  margin: 10px;
  background-color: ${props => props.color || "grey"};
  color: ${props =>
    props.color === colours.white || props.color === colours.lightGrey
      ? colours.darkGrey
      : colours.white};
  border: ${props => (props.color === colours.white ? `1px solid ${colours.darkGrey}` : "none")};
  position: relative;

  p {
    margin-top: 3px;
    margin-bottom: 0;
    text-transform: uppercase;
    color: ${props =>
      props.color === colours.white || props.color === colours.lightGrey
        ? "rgba(0, 0, 0, 0.5)"
        : "rgba(255, 255, 255, 0.7)"};
  }

  button {
    background-color: transparent !important;
    background-image: url(${props =>
      props.color === colours.white || props.color === colours.lightGrey ? copyDark : copy});
    background-size: 100%;
    color: inherit;
    border: none;
    padding: 0 !important;
    font: inherit;
    cursor: pointer;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -9px;
    opacity: 0.5;
    outline: none;

    &:hover {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  margin: 0 -10px;
  margin-bottom: 25px;
`;

class Icons extends Component {
  _onToggle = type => {
    this.setState({ type });
    window.localStorage.setItem("colorType", type);
  };

  _hexRgb = hex => {
    const cutHex = h => (h.charAt(0) === "#" ? h.substring(1, 7) : h);
    const r = parseInt(cutHex(hex).substring(0, 2), 16);
    const g = parseInt(cutHex(hex).substring(2, 4), 16);
    const b = parseInt(cutHex(hex).substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };

  _onCopy = () => {
    this.setState({ showToast: true });
    setTimeout(() => this.setState({ showToast: false }), 3000);
  };

  render() {
    return (
      <div>
        <Heading>Icons</Heading>
        <h3>Brand Colours</h3>
        <Container>
          <ColourBlock color={colours.blue}>
            Loot Blue
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.yellow}>
            Loot Goals
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.lightBlue}>
            Loot Blue Shirt
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.pink}>
            Loot Budgeting
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>
        </Container>
        <h3>Grey Colours</h3>
        <Container>
          <ColourBlock color={colours.white}>
            White
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.lightGrey}>
            Light Grey
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.grey}>
            Grey
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.darkGrey}>
            Dark Grey
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.black}>
            Black
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>
        </Container>
        <h3>UI Colours</h3>
        <Container>
          <ColourBlock color={colours.darkGreen}>
            CTA
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.red}>
            Danger
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>

          <ColourBlock color={colours.green}>
            Positive
            <ClipboardButton onSuccess={this._onCopy} />
          </ColourBlock>
        </Container>
      </div>
    );
  }
}

export default Icons;
