import React, { Component } from "react";
import Description from "../../elements/Description";

const docs = `
  # isValidEmail: func [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/utility/isValidEmail.js)
  ${"`import isValidEmail from 'loot-web-kit/utility/isValidEmail'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/utilities/isValidEmail.js)

  Function to validate email address *Return:* Bool
`;

class isValidEmailExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
      </div>
    );
  }
}

export default isValidEmailExample;
