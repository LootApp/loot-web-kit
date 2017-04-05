import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class WebKitConfig extends Component {
  // -- prop validation ----------------------------------------------------- //
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    );
  }
}

export default WebKitConfig;
