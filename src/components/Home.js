import React from 'react';

class Home extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value;
    this.props.history.pushState(null, `profile/${userName}`);
  }

  render() {
    return (
      <div className="home">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input type="text" ref="userName" />
          </div>
          <div>
            <button type="submit">GitHub</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
