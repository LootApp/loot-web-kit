import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class WebKitConfig extends Component {
  // -- prop validation ----------------------------------------------------- //
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired
  }

  // -- methods ------------------------------------------------------------- //
  componentDidMount() {
    injectTapEventPlugin();
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
