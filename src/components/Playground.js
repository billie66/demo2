import React from 'react';
import NavBar from './shared/NavBar';

class Playground extends React.Component {

  _handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value;
    this.props.history.pushState(null, `profile/${userName}`);
  }

  render() {
    return (
      <div className="playground">
        <form onSubmit={this._handleSubmit.bind(this)}>
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

export default Playground;
