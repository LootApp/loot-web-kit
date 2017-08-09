import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAmountLeftInput = styled.input`
  border: none;
  color: #545459;
  font-size: 1.1em;
  padding: 5px 10px 5px 0;
  transition: border 0.2s ease;
  border-bottom: 1px solid transparent;
  opacity: ${({ focus, value }) => (focus || value ? 1 : 0)};
  &:focus {
    outline: none;
    border-color: ${props => (props.error ? "rgba(221, 69, 65,0.3)" : "rgba(77, 183, 195, 0.3)")};
  }
  transition: all 0.3s ease;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  pointer-events: auto;

  &:hover {
    span {
      background-color: ${props => (props.focus || props.error ? "none" : "#545454")};
    }
  }
`;

const Span = styled.span`
  top: 30px;
  position: absolute;
  background: ${props => {
    if (props.error) return "#DA6E6E";
    if (!props.focus) return "#bbbcbe";
    if (props.focus) return "#4db7c3";
  }};
  width: ${props => {
    if (!props.focus || props.error) return "100%";
    if (props.focus) return props.percentage < 0 ? "0%" : `${props.percentage}%`;
  }};
  height: ${props => (props.focus || props.error ? "2px" : "1px")};
  transition: all 0.2s ease;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.8em;
  text-align: right;
  transition: all 0.5s ease;
  opacity: ${props => (props.hide && !props.error ? 0 : 1)};
  color: ${props => (props.error ? "#DA6E6E" : "default")};
`;

const TextAbove = styled(P)`
  position: absolute;
  right: 0;
  z-index: 1;
`;

const TextBelow = styled(P)`
  position: absolute;
  right: 0;
  bottom: -30px;;
`;

const StyledLabel = styled.label`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: -15px;
  left: 2px;
  font-size: 10px;
  display: block;
  color: ${props => {
    if (props.error) return "#DA6E6E";
    if (props.focus) return "rgb(77, 183, 195)";
    return "#545454";
  }};
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  transform: scale(${props => (props.focus || props.content ? 1 : 1.4)})
    translateY(${props => (props.focus || props.content ? 0 : "15px")});
  will-change: transform;
  font-weight: 400;
`;

class AmountLeftInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      focus: false,
      error: false,
      amountLeft: props.remaining,
      percentage: this.getPercentage(props.remaining)
    };
  }

  getPercentage = amount => amount / this.props.limit * 100;

  handleAmountChange = (e, onChange) => {
    const value = `${parseInt(e.target.value.replace(/[^0-9]/g, ""), 0) || ""}`;
    const prefix = value ? this.props.prefix : "";

    const percentage = this.getPercentage(this.props.remaining) - this.getPercentage(value || 0);
    const amountLeft = `${parseInt(percentage / 100 * this.props.limit, 0)}`;

    this.setState({
      amount: `${prefix}${value}`,
      percentage,
      amountLeft,
      error: amountLeft < 0
    });

    if (onChange) {
      onChange({
        value: `${prefix}${value}`,
        amountLeft,
        percentage
      });
    }
  };

  handleFocus = () => this.setState({ focus: true });
  handleBlur = () => this.setState({ focus: false });

  render() {
    const { focus, amount, percentage, error } = this.state;
    const { label, onChange, prefix, textAbove, textBelow, ...otherProps } = this.props;

    return (
      <Container error={error} focus={focus}>
        <StyledLabel error={error} content={amount.length > 0} focus={focus}>
          {label}
        </StyledLabel>
        <TextAbove error={error} hide={!focus}>
          {textAbove}
        </TextAbove>
        <StyledAmountLeftInput
          {...otherProps}
          focus={focus}
          error={error}
          value={amount}
          name={label}
          placeholder={`${prefix}0`}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={e => this.handleAmountChange(e, onChange)}
        />
        <Span error={error} focus={focus} percentage={percentage} />
        <TextBelow error={error} hide={!focus}>
          {textBelow}
        </TextBelow>
      </Container>
    );
  }
}

AmountLeftInput.propTypes = {
  limit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  prefix: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  textAbove: PropTypes.string,
  textBelow: PropTypes.string
};

AmountLeftInput.defaultProps = {
  prefix: "£",
  textAbove: "",
  textBelow: "",
  onChange: null
};

export default AmountLeftInput;
