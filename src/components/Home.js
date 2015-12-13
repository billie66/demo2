import React from 'react';
let address = require('../assets/race-car.jpeg');

class Home extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value;
    this.props.history.pushState(null, `profile/${userName}`);
  }

  render() {
    return (
      <div className="home">
        <img src={address} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="">
            <input type="text" className="" ref="userName" />
          </div>
          <div className="">
            <button type="submit" className="">GitHub</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
