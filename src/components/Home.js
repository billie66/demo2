import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import NavBar from './shared/NavBar';

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <NavBar history={this.props.history} />
      </div>
    );
  }
}

export default Home;
