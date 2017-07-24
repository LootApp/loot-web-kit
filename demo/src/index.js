import React, { Component } from "react";
import { render } from "react-dom";
import styled, { injectGlobal } from "styled-components";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Accordion from "./components/Accordion";
import FormExample from "./examples/components/FormExample";
import InputVerify from "./examples/components/InputVerifyExample";
import InputExample from "./examples/components/InputExample";
import InputAddressExample from "./examples/components/InputAddressExample";
import InputMobileNumberExample from "./examples/components/InputMobileNumberExample";
import InputFormatExample from "./examples/components/InputFormatExample";
import InputEmailExample from "./examples/components/InputEmailExample";
import InputRadioExample from "./examples/components/InputRadioExample";
import InputMoneyExample from "./examples/components/InputMoneyExample";
import InputDateTimeExample from "./examples/components/InputDateTimeExample";
import ColorScheme from "./examples/design/ColorScheme";
import InputCardExample from "./examples/components/InputCardExample";
import InputPasswordExample from "./examples/components/InputPasswordExample";
import InputIncrementExample from "./examples/components/InputIncrementExample";
import SpinnerExample from "./examples/components/SpinnerExample";
import ButtonExample from "./examples/components/ButtonExample";
import isMobileExample from "./examples/utility/isMobileExample";
import isDateInputExample from "./examples/utility/isDateInputExample";
import stringFormatterExample from "./examples/utility/stringFormatterExample";
import formatAmountExample from "./examples/utility/formatAmountExample";
import isValidEmailExample from "./examples/utility/isValidEmailExample";
import { colours } from "./Constants";
import anchor from "./assets/anchor.svg";
import { links } from "./links.json";

// eslint-disable-next-line
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
    color: ${colours.darkGrey};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  p {
    line-height: 28px;
  }
`;

const Main = styled.main`
  position: relative;
  height: 100%;
`;

const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  overflow: scroll;
  background-color: ${colours.white};
  border-right: 1px solid #e0e4e5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  @media (max-width: 1300px) {
    z-index: 10;
    width: 100%;
    transform: translate3d(${props => (props.open ? "0" : "-100%")}, 0, 0);
  }
`;

const Content = styled.div`
  padding: 15px 10px;
  @media (min-width: 1300px) {
    padding: 50px 100px;
    margin-left: 300px;
  }
`;

const Branding = styled.div`
  border-bottom: 1px solid #e0e4e5;
  text-align: center;
  padding: 40px 0;

  img {
    width: 50px;
  }

  @media (max-width: 1300px) {
    padding: 15px 0;

    img {
      width: 30px;
    }
  }

  span {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    margin-top: 10px;
    letter-spacing: 3px;
    color: ${colours.grey};
  }
`;

const SLink = styled(NavLink)`
  text-decoration: none;
  color: ${colours.darkGrey};
  display: block;
  padding: 10px 0;

  &:hover {
    color: ${colours.grey};
  }
`;

const SMobileMenu = styled.div`
  background-color: ${colours.white};
  display: none;
  margin-bottom: ${props => (props.noMargin ? 0 : "40px")};
  padding: 10px 10px;
  border: 2px solid ${colours.blue};
  color: ${colours.blue};
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: ${colours.blue};
    color: ${colours.white};
  }

  @media (max-width: 1300px) {
    display: block;
  }
`;

class Demo extends Component {
  state = {
    menuOpen: false
  };

  render() {
    return (
      <Router>
        <Main>
          <Sidebar open={this.state.menuOpen}>
            <Branding>
              <SLink to="/loot-web-kit" onClick={() => this.setState({ menuOpen: false })}>
                <img src={anchor} alt="Loot anchor" />
                <span>Styleguide</span>
              </SLink>
            </Branding>
            <SMobileMenu noMargin onClick={() => this.setState({ menuOpen: false })}>
              Close Menu
            </SMobileMenu>

            {links.map(section =>
              <Accordion key={section.title} title={section.title}>
                {section.links.map(link =>
                  <SLink
                    key={link.text}
                    onClick={() => this.setState({ menuOpen: false })}
                    activeStyle={{ color: colours.blue }}
                    to={link.to}
                  >
                    {link.text}
                  </SLink>
                )}
              </Accordion>
            )}
          </Sidebar>
          <Content>
            <SMobileMenu onClick={() => this.setState({ menuOpen: true })}>Open Menu</SMobileMenu>
            <Switch>
              <Route path="/loot-web-kit/components/form" component={FormExample} />
              <Route path="/loot-web-kit/components/input" component={InputExample} />
              <Route path="/loot-web-kit/components/input-verify" component={InputVerify} />
              <Route
                path="/loot-web-kit/components/input-address"
                component={InputAddressExample}
              />
              <Route
                path="/loot-web-kit/components/input-mobile-number"
                component={InputMobileNumberExample}
              />
              <Route path="/loot-web-kit/components/input-email" component={InputEmailExample} />
              <Route path="/loot-web-kit/components/input-radio" component={InputRadioExample} />
              <Route path="/loot-web-kit/components/input-format" component={InputFormatExample} />
              <Route path="/loot-web-kit/components/input-money" component={InputMoneyExample} />
              <Route
                path="/loot-web-kit/components/input-date-time"
                component={InputDateTimeExample}
              />
              <Route path="/loot-web-kit/components/input-card" component={InputCardExample} />
              <Route
                path="/loot-web-kit/components/input-password"
                component={InputPasswordExample}
              />
              <Route
                path="/loot-web-kit/components/input-increment"
                component={InputIncrementExample}
              />
              <Route path="/loot-web-kit/utility/is-valid-email" component={isValidEmailExample} />
              <Route path="/loot-web-kit/utility/is-mobile" component={isMobileExample} />
              <Route path="/loot-web-kit/utility/is-date-input" component={isDateInputExample} />
              <Route path="/loot-web-kit/utility/format-amount" component={formatAmountExample} />
              <Route
                path="/loot-web-kit/utility/string-formatter"
                component={stringFormatterExample}
              />
              <Route path="/loot-web-kit/components/button" component={ButtonExample} />
              <Route path="/loot-web-kit/components/spinner" component={SpinnerExample} />
              <Route path="/loot-web-kit" component={ColorScheme} />
            </Switch>
          </Content>
        </Main>
      </Router>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
