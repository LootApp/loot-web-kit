import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import visa from "../assets/visa-icon.svg";
import mastercard from "../assets/mastercard-icon.svg";

const SInput = styled(Input)`
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 22px;
    width: 30px;
    height: 20px;
    background-image: url(${props => props.cardIcon || "none"});
    background-size: cover;
  }
`;

class Card extends Component {
  static propTypes = {
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    required: PropTypes.bool
  };

  static defaultProps = {
    maxLength: 19,
    minLength: 19,
    required: false
  };

  state = {
    cardIcon: null
  };

  _onChange = value => {
    let formatedValue = value.toString().replace(/\s/g, "");
    formatedValue = formatedValue.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 ").trim();
    if (formatedValue.match("^4")) this.setState({ cardIcon: visa });
    else if (formatedValue.match("^5[1-5]")) this.setState({ cardIcon: mastercard });
    else this.setState({ cardIcon: null });
    return formatedValue;
  };

  _onBlur = ({ target }) => {
    if (!target) return null;
    if (target.value.length && target.value) {
      if (this.props.required && !target.value.length) {
        this.input.setState({
          error: true,
          helperText: "This field is required"
        });
      } else if (target.value.length < 19) {
        this.input.setState({
          error: true,
          helperText: "Debit Card Number needs 16 digits"
        });
      }
    }
  };

  render() {
    const { maxLength, minLength, ...props } = this.props;
    return (
      <SInput
        {...props}
        cardIcon={this.state.cardIcon}
        type="tel"
        maxLength={maxLength}
        minLength={minLength}
        onBlur={this._onBlur}
        innerRef={input => (this.input = input)}
        onChange={this._onChange}
      />
    );
  }
}

export default Card;
