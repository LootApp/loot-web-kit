import React, { Component } from "react";
import Description from "../../elements/Description";

const docs = `
  # formatSortcode: func [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/utility/formatSortcode.js)
  ${"`import formatSortcode from 'loot-web-kit/utility/formatSortcode'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/utilities/formatSortcode.js)

  Function to format sort code string into 00-00-00 format. *Return:* String
`;

class formatSortcodeExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
      </div>
    );
  }
}

export default formatSortcodeExample;
