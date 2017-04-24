import React, { Component } from "react";
import LiveEditor from "../utilities/LiveEditor";
import Description from "../utilities/Description";
import InputDateTime from "../components/InputDateTime";

const docs = `
  # InputDateTime [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/InputDateTimeExample.js)
  ${"`import InputDateTime from 'loot-web-kit/lib/InputDateTime'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputDateTime.js)

  Input that displays datepicker *Extends:* [Input](/styleguide/components/input)
`;

const props = `
  # Props

  **defaultDate**: date [ISO format (yyyy-mm-dd)]

  Date that will be selected in calendar initially, must be formed using Date i.e.

  ${"`new Date('1994-07-04')`"}

  *Default:* new Date()
`;

const code = `<InputDateTime
  label='Date'
  placeholder='DD/MM/YYYY'
  defaultDate={new Date('1994-07-04')}
  value="1994-07-04"
/>`;

class InputExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
        <LiveEditor scope={{ InputDateTime }} code={code} />
        <Description source={props} />
      </div>
    );
  }
}

export default InputExample;
