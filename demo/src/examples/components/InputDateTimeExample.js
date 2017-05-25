import React, { Component } from "react";
import LiveEditor from "../../components/LiveEditor";
import Description from "../../components/Description";
import InputDateTime from "../../../../src/components/InputDateTime";

const docs = `
  # InputDateTime [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/components/InputDateTimeExample.js)
  ${"`import InputDateTime from 'loot-web-kit/lib/InputDateTime'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/components/InputDateTime.js)

  Input that displays datepicker *Extends:* [Input](/loot-web-kit/components/input)
`;

const props = `
  # Props

  **defaultDate**: date [ISO format (yyyy-mm-dd)]

  Date that will be selected in calendar initially, must be formed using Date i.e.

  ${"`new Date('1994-07-04')`"}

  *Default:* new Date()

  ---

  **minDate**: date [ISO format (yyyy-mm-dd)]

  Minimum date to enable in calendar *Default:* null

  ---

  **maxDate**: date [ISO format (yyyy-mm-dd)]

  Maximum date to enable in calendar *Default:* null
`;

const code = `<InputDateTime
  label='Date'
  placeholder='DD/MM/YYYY'
  defaultDate={new Date('2017-04-20')}
  value="2017-04-20"
  minDate={new Date('2017-04-10')}
  maxDate={new Date('2017-04-30')}
/>`;

class InputDateTimeExample extends Component {
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

export default InputDateTimeExample;
