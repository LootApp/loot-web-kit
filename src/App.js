import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Accordion from "./elements/Accordion";
import InputExample from "./examples/components/InputExample";
import InputMoneyExample from "./examples/components/InputMoneyExample";
import InputDateTimeExample from "./examples/components/InputDateTimeExample";
import ColorScheme from "./examples/design/ColorScheme";
import InputCardExample from "./examples/components/InputCardExample";
import InputPasswordExample from "./examples/components/InputPasswordExample";
import InputIncrementExample from "./examples/components/InputIncrementExample";
import ButtonExample from "./examples/components/ButtonExample";
import isMobileExample from "./examples/utility/isMobileExample";
import isDateInputExample from "./examples/utility/isDateInputExample";
import formatAmountExample from "./examples/utility/formatAmountExample";
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
  border-right: 1px solid #E0E4E5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  @media (max-width: 1300px) {
    z-index: 10;
    width: 100%;
    transform: translate3d(${props => (props.open ? "0" : "-100%")}, 0 ,0);
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
  border-bottom: 1px solid #E0E4E5;
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

class App extends Component {
  state = {
    menuOpen: false
  };

  render() {
    return (
      <Router>
        <Main>
          <Sidebar open={this.state.menuOpen}>
            <Branding>
              <SLink
                to="/styleguide"
                onClick={() => this.setState({ menuOpen: false })}
              >
                <img src={anchor} alt="Loot anchor" />
                <span>Styleguide</span>
              </SLink>
            </Branding>

            <SMobileMenu
              noMargin
              onClick={() => this.setState({ menuOpen: false })}
            >
              Close Menu
            </SMobileMenu>

            {links.map(section => (
              <Accordion key={section.title} title={section.title}>
                {section.links.map(link => (
                  <SLink
                    key={link.text}
                    onClick={() => this.setState({ menuOpen: false })}
                    activeStyle={{ color: colours.blue }}
                    to={link.to}
                  >
                    {link.text}
                  </SLink>
                ))}
              </Accordion>
            ))}

          </Sidebar>
          <Content>
            <SMobileMenu onClick={() => this.setState({ menuOpen: true })}>
              Open Menu
            </SMobileMenu>
            <Switch>
              <Route
                path="/styleguide/components/input"
                component={InputExample}
              />
              <Route
                path="/styleguide/components/input-money"
                component={InputMoneyExample}
              />
              <Route
                path="/styleguide/components/input-date-time"
                component={InputDateTimeExample}
              />
              <Route
                path="/styleguide/components/input-card"
                component={InputCardExample}
              />
              <Route
                path="/styleguide/components/input-password"
                component={InputPasswordExample}
              />
              <Route
                path="/styleguide/components/input-increment"
                component={InputIncrementExample}
              />
              <Route
                path="/styleguide/utility/is-mobile"
                component={isMobileExample}
              />
              <Route
                path="/styleguide/utility/is-date-input"
                component={isDateInputExample}
              />
              <Route
                path="/styleguide/utility/format-amount"
                component={formatAmountExample}
              />
              <Route
                path="/styleguide/components/button"
                component={ButtonExample}
              />
              <Route path="/styleguide" component={ColorScheme} />
            </Switch>
          </Content>
        </Main>
      </Router>
    );
  }
}

export default App;
