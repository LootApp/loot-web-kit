import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
`;

class Form extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    document.activeElement.blur();
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event);
  };

  render = () => (
    <StyledForm {...this.props} onSubmit={this._onSubmit}>
      {this.props.children}
    </StyledForm>
  )
}

export default Form;