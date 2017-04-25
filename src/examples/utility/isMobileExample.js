import React, { Component } from "react";
import Description from "../../elements/Description";

const docs = `
  # isMobile: func [![EditIcon](https://maxcdn.icons8.com/Android_L/PNG/512/Editing/pencil-512.png)](https://github.com/LootApp/loot-web-kit/blob/master/src/examples/utility/isMobile.js)
  ${"`import isMobile from 'loot-web-kit/utility/isMobile'`"}
  [![GitHub](http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg)](https://github.com/LootApp/loot-web-kit/blob/master/src/utilities/isMobile.js)

  Function to detect mobile devices, returns true if touch screen is suppordet and screen width is not greater than 800px
`;

class isMobileExample extends Component {
  render() {
    return (
      <div>
        <Description source={docs} />
      </div>
    );
  }
}

export default isMobileExample;
