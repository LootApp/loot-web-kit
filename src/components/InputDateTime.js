import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { injectGlobal } from "styled-components";
import Input from "./Input";
import isMobile from "../utilities/isMobile";
import isDateInput from "../utilities/isDateInput";

let MaterialDateTimePicker = null;
if (!isMobile() || (isMobile() && !isDateInput())) {
  MaterialDateTimePicker = require("material-datetime-picker/dist/material-datetime-picker");
  require("material-datetime-picker/dist/material-datetime-picker.css");
  const arrow = require("../assets/arrow-calendar.svg");

  // eslint-disable-next-line
  injectGlobal`
    .c-btn--flat {
      padding: 7px 10px;
      border-radius: 3px;
      text-transform: uppercase;
      font-weight: semibold;
      transition: all .15s ease;

      &:hover {
        background-color: #4db7c3;
        color: #ffffff;
      }
    }

    .c-datepicker__header {
      display: none;
    }

    .c-datepicker {
      min-height: 380px !important;
    }

    .c-datepicker__day-body:hover {
      &::before {
        background-color: #4db7c3 !important;
      }
    }

    .c-datepicker__days {
      margin-top: 0 !important;
    }

    .c-datepicker__back::before,
    .c-datepicker__next::after {
      content: '' !important;
      width: 12px;
      height: 12px;
      display: inline-block;
      background-image: url(${arrow});
      background-size: cover;
      opacity: 0.7;
    }

    .c-datepicker__back::before {
      transform: rotate(180deg);
    }

    .c-datepicker__toggle {
      display: none !important;
    }

    .c-datepicker__day--disabled {
      pointer-events: none;
      opacity: 0.35;
      cursor: not-allowed;
    }
  `;
}

const SInput = styled(Input)`
  appearance: none;

  ::-webkit-datetime-edit-fields-wrapper {
    text-transform: uppercase;
  }

  ::-webkit-calendar-picker-indicator,
  ::-webkit-inner-spin-button,
  ::-webkit-clear-button {
    display: none;
  }
`;

class InputDateTime extends Component {
  static propTypes = {
    defaultDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func
  };

  static defaultProps = {
    defaultDate: new Date(),
    minDate: null,
    maxDate: null,
    onChange: null
  };

  componentDidMount() {
    if (!isMobile() || (isMobile() && !isDateInput())) {
      this.picker = new MaterialDateTimePicker({
        default: this.props.defaultDate,
        dateValidator: d => {
          if (this.props.minDate && this.props.maxDate) {
            return d >= this.props.minDate && d <= this.props.maxDate;
          } else if (this.props.minDate) return d >= this.props.minDate;
          else if (this.props.maxDate) return d <= this.props.maxDate;
        }
      })
        .on("open", () => {
          setTimeout(() => {
            this.overlay = document.querySelector(".c-scrim--shown");
            this.overlay.addEventListener("click", this._onCloseCalendar);
          }, 100);
        })
        .on("close", () => {
          this.overlay.removeEventListener("click", this._onCloseCalendar);
        })
        .on("submit", value => {
          this.input._updateValue(value.toDate().toISOString().substring(0, 10));
        });

      this._onOpenCalendar = () => this.picker.open();

      this._onCloseCalendar = () => this.picker.close();
    }
  }

  componentWillUnmount() {
    if (!isMobile() || (isMobile() && !isDateInput()))
      this.overlay.removeEventListener("click", this._onCloseCalendar);
  }

  _onCalendarOpen = () =>
    !isMobile() || (isMobile() && !isDateInput()) ? this._onOpenCalendar() : null;

  _value = () => this.input._value();

  _onChange = value => {
    !!this.props.onChange && this.props.onChange(value);
    return value;
  };

  render() {
    const { onChange, ...props } = this.props;
    return (
      <SInput
        {...props}
        type="date"
        label="Date"
        readOnly={!isMobile()}
        placeholder="DD/MM/YYYY"
        onChange={this._onChange}
        onFocus={this._onCalendarOpen}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputDateTime;
