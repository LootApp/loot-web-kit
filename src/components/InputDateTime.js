import React, { Component } from "react";
import { injectGlobal } from "styled-components";
// eslint-disable-next-line
import MaterialDateTimePicker from "material-datetime-picker";
import "material-datetime-picker/dist/material-datetime-picker.css";
import { transitions, colours } from "../Constants";
import arrow from "../assets/arrow-calendar.svg";

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

  .c-datepicker__day--selected {
    font-weight: bold;
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
`;

class InputDateTime extends Component {
  _onOpenCalendar = () => this.picker.open();

  _onCloseCalendar = () => this.picker.close();

  picker = new MaterialDateTimePicker()
    .on("open", () => {
      setTimeout(() => {
        this.overlay = document.querySelector(".c-scrim--shown");
        this.overlay.addEventListener("click", this._onCloseCalendar);
      }, 100);
    })
    .on("close", () => {
      this.overlay.removeEventListener("click", this._onCloseCalendar);
    });

  render() {
    return (
      <button className="test-datepicker" onClick={this._onOpenCalendar}>
        Open Date Picker
      </button>
    );
  }
}

export default InputDateTime;
