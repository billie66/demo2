import React from 'react';
import '../stylesheets/main.scss';
import NavBar from './shared/NavBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
