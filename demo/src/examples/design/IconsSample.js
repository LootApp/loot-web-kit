import React, { Component } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import Icons from "../../../../src/icons";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  margin: 0 -10px;
  margin-bottom: 25px;
  background: #e3e3e3;
  padding: 10px;
  border-radius: 4px;
`;

const IconWrapper = styled.div`
  position: relative;
  height: 44px;
  padding: 5px;
  margin: 0 5px;
  & img {
    height: 100%;
  }
  & span {
    transition: all 0.3s ease-in-out;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 6px 12px;
    padding: 5px;
    position: absolute;
    left: 0;
    bottom: -30px;
    color: #4db7c3;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

class IconsSample extends Component {
  _onCopy = () => {
    this.setState({ showToast: true });
    setTimeout(() => this.setState({ showToast: false }), 3000);
  };

  render() {
    return (
      <div>
        <Heading>Icons</Heading>
        <p>Availabe for import under 'loot-web-kit/lib/icons' or 'loot-web-kit/es/icons'</p>
        <p>
          <strong>Hover</strong> icons to view variable name
        </p>

        <h3>Navigation</h3>
        <Container>
          <IconWrapper>
            <img src={Icons.budgeting} alt="budgeting" />
            <span>budgeting</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.transactions} alt="transactions" />
            <span>transactions</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.sendMoney} alt="sendMoney" />
            <span>sendMoney</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.goals} alt="goals" />
            <span>goals</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.cardWhite} alt="cardWhite" />
            <span>cardWhite</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.profile} alt="profile" />
            <span>profile</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.support} alt="support" />
            <span>support</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.logOut} alt="logOut" />
            <span>logOut</span>
          </IconWrapper>
        </Container>

        <h3>Profile</h3>
        <Container>
          <IconWrapper>
            <img src={Icons.favourite} alt="favourite" />
            <span>favourite</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.gender} alt="gender" />
            <span>gender</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.birthday} alt="birthday" />
            <span>birthday</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.emailBlue} alt="emailBlue" />
            <span>emailBlue</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.phoneIcon} alt="phoneIcon" />
            <span>phoneIcon</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.home} alt="home" />
            <span>home</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.key} alt="key" />
            <span>key</span>
          </IconWrapper>
        </Container>

        <h3>Add Money</h3>
        <Container>
          <IconWrapper>
            <img src={Icons.fingerprint} alt="fingerprint" />
            <span>fingerprint</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.debitSpeedIcon} alt="debitSpeedIcon" />
            <span>debitSpeedIcon</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.bankSpeedIcon} alt="bankSpeedIcon" />
            <span>bankSpeedIcon</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.addMoneyRequest} alt="addMoneyRequest" />
            <span>addMoneyRequest</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.addMoneyBank} alt="addMoneyBank" />
            <span>addMoneyBank</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.cardBlue} alt="cardBlue" />
            <span>cardBlue</span>
          </IconWrapper>
        </Container>

        <h3>Actions</h3>
        <Container>
          <IconWrapper>
            <img src={Icons.emailWhite} alt="emailWhite" />
            <span>emailWhite</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.whatsapp} alt="whatsapp" />
            <span>whatsapp</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.toggle} alt="toggle" />
            <span>toggle</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.twitter} alt="twitter" />
            <span>twitter</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.editTool} alt="editTool" />
            <span>editTool</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.deleteIcon} alt="deleteIcon" />
            <span>deleteIcon</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.rotate} alt="rotate" />
            <span>rotate</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.tickBlack} alt="tickBlack" />
            <span>tickBlack</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.tickWhite} alt="tickWhite" />
            <span>tickWhite</span>
          </IconWrapper>
        </Container>

        <h3>Indicators</h3>
        <Container>
          <IconWrapper>
            <img src={Icons.triangle} alt="triangle" />
            <span>triangle</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.addIcon} alt="addIcon" />
            <span>addIcon</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.exclamation} alt="exclamation" />
            <span>exclamation</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.tickCircle} alt="tickCircle" />
            <span>tickCircle</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.crossWhite} alt="crossWhite" />
            <span>crossWhite</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.crossBlue} alt="crossBlue" />
            <span>crossBlue</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.crossGrey} alt="crossGrey" />
            <span>crossGrey</span>
          </IconWrapper>
        </Container>

        <h3>Miscellaneous</h3>
        <Container>
          <IconWrapper>
            <img src={Icons.portrait} alt="portrait" />
            <span>portrait</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.responsiveIcon} alt="responsiveIcon" />
            <span>responsiveIcon</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.goalsTransfer} alt="goalsTransfer" />
            <span>goalsTransfer</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.profilePlaceholder} alt="profilePlaceholder" />
            <span>profilePlaceholder</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.imagePlaceholder} alt="imagePlaceholder" />
            <span>imagePlaceholder</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.statementIcon} alt="statementIcon" />
            <span>statementIcon</span>
          </IconWrapper>
          <IconWrapper>
            <img src={Icons.filter} alt="filter" />
            <span>filter</span>
          </IconWrapper>
        </Container>
      </div>
    );
  }
}

export default IconsSample;
