import React, { Component } from 'react';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <div className="app-header"></div>
        <Home />
        <div className="app-footer">
          The beautiful attracts the beautiful
        </div>
      </div>
    );
  }
}

export default App;
