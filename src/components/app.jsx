import React from 'react';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      messages:[
        'hi how are you',
        'I\'m good thanks',
      ]
    }
  }

  render () {
    debugger;
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div style={{color: 'red'}}>{message}</div>
      );
    })

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;
