import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(event) {
    if (event.keyCode === 13) {
      this.props.handleChatClick(event.target.value);
    }
  }

  render() {
    const fw = true;
    return (
        <MuiThemeProvider>
            <TextField
              floatingLabelText="Enter your message"
              onKeyDown={this.keyPress}
              fullWidth={fw}
            />
        </MuiThemeProvider>
    );
  }
}

Message.propTypes = {
  handleChatClick: PropTypes.func.isRequired,
};

export default Message;
