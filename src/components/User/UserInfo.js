import React from 'react';
import { _ } from 'underscore';

const UserInfo = React.createClass({
  render() {
    const userInfo = this.props.userInfo;
    return (
      <div>
        <p>{userInfo.login}</p>
        <img src={this.props.userInfo['avatar_url']} />
        <ul>
          <li>followers: {userInfo.followers}</li>
          <li>following: {userInfo.following}</li>
          <li>repos: {userInfo.public_repos}</li>
        </ul>
      </div>
    );
  }
});

export default UserInfo;
