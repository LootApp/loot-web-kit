import React, { Component } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import copy from "../../assets/copy.svg";
import copyDark from "../../assets/copy-dark.svg";
import { colours } from "../../Constants";

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
          <div color={colours.blue}>Loot Blue</div>

          <div color={colours.yellow}>Loot Goals</div>

          <div color={colours.lightBlue}>Loot Blue Shirt</div>

          <div color={colours.pink}>Loot Budgeting</div>
        </Container>
        <h3>Grey Colours</h3>
        <Container>
          <div color={colours.white}>White</div>

          <div color={colours.lightGrey}>Light Grey</div>

          <div color={colours.grey}>Grey</div>

          <div color={colours.darkGrey}>Dark Grey</div>

          <div color={colours.black}>Black</div>
        </Container>
        <h3>UI Colours</h3>
        <Container>
          <div color={colours.darkGreen}>CTA</div>

          <div color={colours.red}>Danger</div>

          <div color={colours.green}>Positive</div>
        </Container>
      </div>
    );
  }
}

export default Icons;
