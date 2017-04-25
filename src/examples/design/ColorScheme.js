import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import ClipboardButton from "react-clipboard.js";
import Heading from "../../elements/Heading";
import copy from "../../assets/copy.svg";
import copyDark from "../../assets/copy-dark.svg";
import { colours } from "../../Constants";

const success = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const ColourBlock = styled.div`
  border-radius: 3px;
  padding: 15px 20px 14px;
  width: 20%;
  margin: 10px;
  background-color: ${props => props.color || "grey"};
  color: ${props => (props.color === colours.white || props.color === colours.lightGrey ? colours.darkGrey : colours.white)};
  border: ${props => (props.color === colours.white ? `1px solid ${colours.darkGrey}` : "none")};
  position: relative;

  p {
    margin-top: 3px;
    margin-bottom: 0;
    text-transform: uppercase;
    color: ${props => (props.color === colours.white || props.color === colours.lightGrey ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.7)")};
  }

  button {
    background-color: transparent !important;
    background-image: url(${props => (props.color === colours.white || props.color === colours.lightGrey ? copyDark : copy)});
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

const Toggle = styled.span`
  border: 1px solid ${colours.blue};
  padding: 5px 20px;
  margin: 0 5px;
  border-radius: 3px;
  color: ${props => (props.selected ? colours.white : colours.blue)};
  background-color: ${props => (props.selected ? colours.blue : colours.white)};

  &:hover {
    cursor: pointer;
  }
`;

const ToggleContainer = styled.div`
  margin-bottom: 50px;
  margin-left: -5px;
`;

const Toast = styled.div`
  display: inline-block;
  padding: 12px 30px 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${colours.white};
  border-radius: 3px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 24px;
  opacity: 0;
  pointer-events: none;
  animation: ${props => (props.show ? `${success} 0.1s linear 1 forwards` : "none")};
`;

class ColorScheme extends Component {
  state = {
    type: window.localStorage.getItem("colorType") || "HEX",
    showToast: false
  };

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

  _getColor = hex => {
    if (this.state.type === "RGB") return this._hexRgb(hex);
    return hex;
  };

  _onCopy = () => {
    this.setState({ showToast: true });
    setTimeout(() => this.setState({ showToast: false }), 3000);
  };

  render() {
    return (
      <div>
        <ToggleContainer>
          <Toggle
            selected={this.state.type === "HEX"}
            onClick={() => this._onToggle("HEX")}
          >
            HEX
          </Toggle>
          <Toggle
            selected={this.state.type === "RGB"}
            onClick={() => this._onToggle("RGB")}
          >
            RGB
          </Toggle>
        </ToggleContainer>
        <Heading>Colour Scheme</Heading>
        <h3>Brand Colours</h3>
        <Container>
          <ColourBlock color={colours.blue}>
            Loot Blue
            <p>{this._getColor(colours.blue)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.blue)}
            />
          </ColourBlock>

          <ColourBlock color={colours.yellow}>
            Loot Goals
            <p>{this._getColor(colours.yellow)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.yellow)}
            />
          </ColourBlock>

          <ColourBlock color={colours.lightBlue}>
            Loot Blue Shirt
            <p>{this._getColor(colours.lightBlue)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.lightBlue)}
            />
          </ColourBlock>

          <ColourBlock color={colours.pink}>
            Loot Budgeting
            <p>{this._getColor(colours.pink)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.pink)}
            />
          </ColourBlock>

        </Container>
        <h3>Grey Colours</h3>
        <Container>
          <ColourBlock color={colours.white}>
            White
            <p>{this._getColor(colours.white)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.white)}
            />
          </ColourBlock>

          <ColourBlock color={colours.lightGrey}>
            Light Grey
            <p>{this._getColor(colours.lightGrey)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.lightGrey)}
            />
          </ColourBlock>

          <ColourBlock color={colours.grey}>
            Grey
            <p>{this._getColor(colours.grey)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.grey)}
            />
          </ColourBlock>

          <ColourBlock color={colours.darkGrey}>
            Dark Grey
            <p>{this._getColor(colours.darkGrey)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.darkGrey)}
            />
          </ColourBlock>

          <ColourBlock color={colours.black}>
            Black
            <p>{this._getColor(colours.black)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.black)}
            />
          </ColourBlock>

        </Container>
        <h3>UI Colours</h3>
        <Container>
          <ColourBlock color={colours.darkGreen}>
            CTA
            <p>{this._getColor(colours.darkGreen)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.darkGreen)}
            />
          </ColourBlock>

          <ColourBlock color={colours.red}>
            Danger
            <p>{this._getColor(colours.red)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.red)}
            />
          </ColourBlock>

          <ColourBlock color={colours.green}>
            Positive
            <p>{this._getColor(colours.green)}</p>
            <ClipboardButton
              onSuccess={this._onCopy}
              data-clipboard-text={this._getColor(colours.green)}
            />
          </ColourBlock>

        </Container>

        <Toast show={this.state.showToast}>👍</Toast>
      </div>
    );
  }
}

export default ColorScheme;
