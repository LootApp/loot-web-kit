import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInputAmountProgress = styled.input`
  border: none;
  color: #545459;
  font-size: 16px;
  padding: 8px 10px 10px 12px;
  transition: border 0.2s ease;
  border-bottom: 1px solid transparent;
  opacity: ${({ focus, value }) => (focus || value ? 1 : 0)};
  &:focus {
    outline: none;
    border-color: ${props => (props.error ? "rgba(221, 69, 65,0.3)" : "rgba(77, 183, 195, 0.3)")};
  }
  &::placeholder {
    color: #c6c6c6;
  }
  transition: all 0.3s ease;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  pointer-events: auto;
  flex-direction: column;

  &:hover {
    span {
      background-color: ${props => (props.focus || props.error ? "none" : "#545454")};
    }
  }
`;

const Span = styled.span`
  top: 46px;
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
  font-size: 0.8em;
  text-align: right;
  color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  opacity: ${props => (props.hide && !props.error ? 0 : 1)};
  color: ${props => (props.error ? "#DA6E6E" : "default")};
`;

const TextAbove = styled(P)`
  position: absolute;
  right: 0;
  top: 14px;
  z-index: 1;
`;

const TextBelow = styled(P)`
  height: 12px;
  line-height: 1;
  margin-top: 9px;
`;

const StyledLabel = styled.label`
  color: ${props => {
    if (props.error) return "#DA6E6E";
    if (props.focus) return "rgb(77, 183, 195)";
    return "#545454";
  }};
  pointer-events: none;
  font-size: 10px;
  display: block;
  transition: all 0.15s ease;
  transform-origin: left top;
  transform: scale(${props => (props.focus ? 1 : 1.4)})
    translateY(${props => (props.focus ? 0 : "15px")});
  will-change: transform;
  text-align: left;

  & span {
    margin-left: 3px;
    color: "#da6e6e";
  }
`;

const SPrefix = styled.div`
  font-size: 16px;
  margin-top: 19px;
  margin-right: 8px;
  color: ${props => (props.active ? "#545454" : "#c6c6c6")};
  opacity: ${props => (props.focus ? 1 : 0)};
  position: absolute;
  z-index: 1;
`;

class InputAmountProgress extends Component {
  // eslint-disable-next-line
  getPercentage = amount => amount / this.props.limit * 100;

  static propTypes = {
    getRef: PropTypes.func
  };

  static defaultProps = {
    getRef: null
  };

  state = {
    amount: "",
    focus: false,
    error: false,
    amountLeft: this.props.remaining,
    percentage: this.getPercentage(this.props.remaining)
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
  }

  handleAmountChange = (e, onChange) => {
    const value = `${parseInt(e.target.value.replace(/[^0-9]/g, ""), 0) || ""}`;

    const percentage = this.getPercentage(this.props.remaining) - this.getPercentage(value || 0);
    const amountLeft = `${parseInt(percentage / 100 * this.props.limit, 0)}`;

    this.setState({
      amount: value,
      percentage,
      amountLeft,
      error: amountLeft < 0
    });

    if (onChange) {
      onChange(value, {
        value,
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
        <SPrefix focus={amount.length || focus} active={!!amount.length}>
          {prefix}
        </SPrefix>
        <StyledLabel focus={amount.length || focus} error={error}>
          {label}
        </StyledLabel>
        <TextAbove error={error} hide={!focus}>
          {textAbove}
        </TextAbove>
        <StyledInputAmountProgress
          {...otherProps}
          focus={focus}
          error={error}
          value={amount}
          name={label}
          placeholder="0"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          innerRef={input => (this.input = input)}
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

InputAmountProgress.propTypes = {
  limit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  prefix: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  textAbove: PropTypes.string,
  textBelow: PropTypes.string
};

InputAmountProgress.defaultProps = {
  prefix: "£",
  textAbove: "",
  textBelow: "",
  onChange: null
};

export default InputAmountProgress;
