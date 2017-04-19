import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Accordion from "./utilities/Accordion";
import InputExample from "./examples/InputExample";
import { colours } from "./Constants";
import anchor from "./assets/anchor.svg";

// eslint-disable-next-line
injectGlobal`
  html, body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
    min-width: 1200px;
    color: ${colours.darkGrey};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
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
`;

const Content = styled.div`
  margin-left: 300px;
  padding: 3.5vw 5vw;
`;

const Branding = styled.div`
  border-bottom: 1px solid #E0E4E5;
  text-align: center;
  padding: 40px 0;

  img {
    width: 50px;
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

class App extends Component {
  render() {
    return (
      <Router>
        <Main>
          <Sidebar>
            <Branding>
              <SLink to="/styleguide">
                <img src={anchor} alt="Loot anchor" />
                <span>Styleguide</span>
              </SLink>
            </Branding>
            <Accordion title="Overview" />
            <Accordion title="Design" />
            <Accordion title="Components">
              <SLink
                activeStyle={{ color: colours.blue }}
                to="/styleguide/components/input"
              >
                Input
              </SLink>
              <SLink
                activeStyle={{ color: colours.blue }}
                to="/styleguide/components/input-money"
              >
                InputMoney
              </SLink>
            </Accordion>
            <Accordion title="Utility" />
          </Sidebar>
          <Content>
            <Switch>
              <Route
                path="/styleguide/components/input"
                component={InputExample}
              />
              <Route path="/styleguide" render={() => <p>Home</p>} />
            </Switch>
          </Content>
        </Main>
      </Router>
    );
  }
}

export default App;
