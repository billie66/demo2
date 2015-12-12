import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../stylesheets/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
