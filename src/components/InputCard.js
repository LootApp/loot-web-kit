import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./InputFormat";
import visa from "../assets/visa-icon.svg";
import mastercard from "../assets/mastercard-icon.svg";

const SInput = styled(Input)`
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 19px;
    width: 30px;
    height: 20px;
    background-image: url(${props => props.cardIcon || "none"});
    background-size: cover;
  }
`;

class Card extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: null
  };

  state = {
    cardIcon: null
  };

  _onChange = value => {
    if (value.match("^4")) this.setState({ cardIcon: visa });
    else if (value.match("^5[1-5]")) this.setState({ cardIcon: mastercard });
    else this.setState({ cardIcon: null });
    !!this.props.onChange && this.props.onChange(value);
    return value;
  };

  render() {
    return (
      <SInput
        {...this.props}
        type="tel"
        delimiter=" "
        maxLength={20}
        occurance={4}
        numbersOnly
        onChange={this._onChange}
        cardIcon={this.state.cardIcon}
      />
    );
  }
}

export default Card;
