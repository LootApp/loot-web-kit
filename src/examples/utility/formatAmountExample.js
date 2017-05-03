import React, { Component } from "react";
import Description from "../../elements/Description";

const docs = `
  # formatAmount: func [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/utility/formatAmount.js)
  ${"`import formatAmount from 'loot-web-kit/utility/formatAmount'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/utilities/formatAmount.js)

  Function to format amount string into 0.00 format. *Return:* String
`;

class formatAmountExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
      </div>
    );
  }
}

export default formatAmountExample;
