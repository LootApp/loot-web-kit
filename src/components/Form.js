import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`width: 100%;`;

class Form extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    document.activeElement && document.activeElement.blur();
  }

  _onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(event);
  };

  render = () => {
    const { onSubmit, children, ...props } = this.props;
    return (
      <StyledForm {...props} onSubmit={this._onSubmit}>
        {children}
      </StyledForm>
    );
  };
}

export default Form;
