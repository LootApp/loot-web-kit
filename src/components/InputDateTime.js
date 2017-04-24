import React, { Component } from "react";
import { injectGlobal } from "styled-components";
// eslint-disable-next-line
import MaterialDateTimePicker from "material-datetime-picker";
import "material-datetime-picker/dist/material-datetime-picker.css";
import { transitions, colours } from "../Constants";

injectGlobal`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src:
      local('Material Icons'),
      local('MaterialIcons-Regular'),
      url(https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2)
      format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  .c-btn--flat {
    padding: 7px 10px;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: semibold;
    transition: ${transitions.base};

    &:hover {
      background-color: ${colours.grey};
    }
  }

  .c-datepicker__header {
    display: none;
  }

  .c-datepicker {
    min-height: 400px !important;
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
      }, 500);
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
