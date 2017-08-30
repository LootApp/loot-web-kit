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

    .c-datepicker {
      border-radius: 3px;
      overflow: hidden;
      min-height: 460px !important;
    }

    .c-datepicker__header-day {
      display: none;
    }

    .c-datepicker__header-date__time {
      display: none !important;
    }

    .c-datepicker__header-date {
      text-align: left;
      padding-left: 15px;
      max-height: 82px;
    }

    .c-datepicker__header-date__day {
      font-size: 28px;
      font-weight: bold;
      text-align: left;
      padding-top: 5px;
    }

    .c-datepicker__header-date__month {
      font-size: 16px;
    }

    .c-datepicker__day-body {
      padding: 10px !important;
      margin: 2px !important;
      border: none !important;

      &::before {
        background-color: #4db7c3;
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

    .modal-btns {
      padding: 10px;
      font-size: 12px;
      color: #4db7c3;
      font-weight: bold;
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
    getRef: PropTypes.func,
    onChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    defaultDate: new Date(),
    minDate: null,
    maxDate: null,
    getRef: null,
    onChange: null,
    label: "Date",
    placeholder: "DD/MM/YYYY"
  };

  componentDidMount() {
    if (typeof this.props.getRef === "function") this.props.getRef(this.input);
    if (!isMobile() || (isMobile() && !isDateInput())) {
      this.picker = new MaterialDateTimePicker({
        default: this.props.defaultDate,
        format: "DD/MM/YYYY",
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
          this.input._updateValue(
            value
              .toDate()
              .toISOString()
              .substring(0, 10)
          );
        });

      this._onOpenCalendar = () => this.picker.open();

      this._onCloseCalendar = () => this.picker.close();
    }
  }

  componentWillUnmount() {
    if ((!isMobile() || (isMobile() && !isDateInput())) && this.overlay)
      this.overlay.removeEventListener("click", this._onCloseCalendar);
  }

  _onCalendarOpen = () =>
    !isMobile() || (isMobile() && !isDateInput())
      ? this._onOpenCalendar()
      : null;

  _value = () => this.input._value();

  _onChange = value => {
    typeof this.props.onChange === "function" && this.props.onChange(value);
    return value;
  };

  render() {
    const { onChange, label, placeholder, ...props } = this.props;
    return (
      <SInput
        {...props}
        type="date"
        label={label}
        readOnly={!isMobile()}
        placeholder={placeholder}
        onChange={this._onChange}
        onFocus={this._onCalendarOpen}
        innerRef={input => (this.input = input)}
      />
    );
  }
}

export default InputDateTime;
