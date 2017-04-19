import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { colours } from "../Constants";

const Markdown = styled(ReactMarkdown)`
  border-left: 4px solid ${colours.blue};
  padding-left: 15px;

  & code {
    background-color: ${colours.darkGrey};
    color: ${colours.white};
    padding: 4px 10px 6px;
    border-radius: 2px;
  }

  & hr {
    border: none;
    border-bottom: 1px solid ${colours.grey};
  }
`;

class Description extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired
  };

  render() {
    return <Markdown source={this.props.source} />;
  }
}

export default Description;
