import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chat from './chat';
import Message from './message';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.handleChatClick = this.handleChatClick.bind(this);
  }

  handleChatClick(msg) {
    this.setState(prevState => ({
      messages: [...prevState.messages, { message: msg }],
    }));
  }

  render() {
    return (
        <div>
            <div>
                <MuiThemeProvider>
                    <AppBar
                      title="Zupa Chat Attempt - Moons"
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                </MuiThemeProvider>
            </div>
            <div>
                <Chat messages={this.state.messages} />
            </div>
            <div>
                <Message handleChatClick={this.handleChatClick} />
            </div>
        </div>
    );
  }
}

export default App;

