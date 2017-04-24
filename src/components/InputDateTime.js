import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
// eslint-disable-next-line
import MaterialDateTimePicker from "material-datetime-picker";
import "material-datetime-picker/dist/material-datetime-picker.css";
import { transitions, colours } from "../Constants";
import arrow from "../assets/arrow-calendar.svg";
import Input from "./Input";

// eslint-disable-next-line
injectGlobal`
  .c-btn--flat {
    padding: 7px 10px;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: semibold;
    transition: ${transitions.base};

    &:hover {
      background-color: ${colours.blue};
      color: ${colours.white};
    }
  }

  .c-datepicker__header {
    display: none;
  }

  .c-datepicker {
    min-height: 400px !important;
  }

  .c-datepicker__day-body:hover {
    &::before {
      background-color: ${colours.blue} !important;
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
`;

const SInput = styled(Input)`
  appearance: none;

  ::-webkit-datetime-edit-fields-wrapper {
    text-transform: uppercase;
    color: ${colours.grey};
  }

  ::-webkit-calendar-picker-indicator,
  ::-webkit-inner-spin-button,
  ::-webkit-clear-button {
    display: none;
  }
`;

class InputDateTime extends Component {
  componentWillUnmount() {
    this.overlay.removeEventListener("click", this._onCloseCalendar);
  }

  _onOpenCalendar = () => this.picker.open();

  _onCloseCalendar = () => this.picker.close();

  _onChange = value => value;

  picker = new MaterialDateTimePicker()
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
      console.log(value.toDate().toLocaleDateString("en-GB"));
    });

  render() {
    return (
      <SInput
        type="date"
        label="Date"
        placeholder="DD/MM/YYYY"
        onChange={this._onChange}
        readOnly
        innerRef={input => (this.input = input)}
        onFocus={this._onOpenCalendar}
      />
    );
  }
}

export default InputDateTime;
