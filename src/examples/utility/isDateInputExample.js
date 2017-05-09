import React, { Component } from "react";
import Description from "../../elements/Description";

const docs = `
  # isDateInput: func [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/utility/isDateInput.js)
  ${"`import isDateInput from 'loot-web-kit/utility/isDateInput'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/utilities/isDateInput.js)

  Function to detect support for input of type date. *Return:* Bool
`;

class isDateInputExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
      </div>
    );
  }
}

export default isDateInputExample;
