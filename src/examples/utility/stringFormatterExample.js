import React, { Component } from "react";
import Description from "../../elements/Description";

const docs = `
  # stringFormatter: func [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/utility/stringFormatter.js)
  ${"`import stringFormatter from 'loot-web-kit/utility/stringFormatter'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/utilities/stringFormatter.js)

  Function to format string with specified delimiter. *Return:* String

  *Options:*

  **value:** *String*\n
  **delimiter:** *String*\n
  **occurance:** *Number*
`;

class stringFormatterExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
      </div>
    );
  }
}

export default stringFormatterExample;
