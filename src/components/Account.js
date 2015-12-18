import React from 'react';

class Account extends React.Component {

  _handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value;
    this.props.history.pushState(null, `account/${userName}`);
  }

  render() {
    return (
      <div className="account">
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

export default Account;
