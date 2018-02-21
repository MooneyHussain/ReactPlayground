import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function Chat(props) {
  const listOfMessages = props.messages;
  const itemsToDisplay = listOfMessages.map(item =>
      <ListItem key={item.message} primaryText={item.message} />);

  return (
      <MuiThemeProvider>
          <List>
              { itemsToDisplay }
          </List>
      </MuiThemeProvider>
  );
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chat;
