import React from 'react';
import NavBar from './shared/NavBar';

class About extends React.Component {

  render() {
    return (
      <div className="home">
        <NavBar history={this.props.history} />
        this is about page
      </div>
    );
  }
}

export default About;
