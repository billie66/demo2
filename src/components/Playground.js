import React from 'react';

class Playground extends React.Component {

  _handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value;
    this.props.history.pushState(null, `profile/${userName}`);
  }

  render() {
    return (
      <div>
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
