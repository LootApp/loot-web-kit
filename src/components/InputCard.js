import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import visa from "../assets/visa-icon.svg";
import mastercard from "../assets/mastercard-icon.svg";

const SInut = styled(Input)`
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 36px;
    width: 30px;
    height: 20px;
    background-image: url(${props => props.cardIcon || "none"});
    background-size: cover;
  }
`;

class Card extends Component {
  static propTypes = {
    maxLength: PropTypes.number,
    minLength: PropTypes.number
  };

  static defaultProps = {
    maxLength: 19,
    minLength: 13
  };

  state = {
    cardIcon: null
  };

  _onChange = value => {
    if (typeof value === "string") {
      let formatedValue = value.toString().replace(/\s/g, "");
      formatedValue = formatedValue
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      if (formatedValue.match("^4")) this.setState({ cardIcon: visa });
      else if (formatedValue.match("^5[1-5]"))
        this.setState({ cardIcon: mastercard });
      else this.setState({ cardIcon: null });
      return formatedValue;
    }
  };

  _value = () => this.input._value();

  render() {
    const { maxLength, minLength, ...props } = this.props;
    return (
      <SInut
        {...props}
        cardIcon={this.state.cardIcon}
        type="tel"
        maxLength={maxLength}
        minLength={minLength}
        innerRef={input => (this.input = input)}
        onChange={this._onChange}
      />
    );
  }
}

export default Card;
