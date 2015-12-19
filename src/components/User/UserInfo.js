import React from 'react';
import { _ } from 'underscore';

const UserInfo = React.createClass({
  render() {
    const userInfo = this.props.userInfo;
    return (
      <div className='user-info'>
        <img src={this.props.userInfo['avatar_url']} />
        <ul>
          <li>
            <b>{userInfo.followers}</b>
            <span>followers</span>
          </li>
          <li>
            <b>{userInfo.following}</b>
            <span>following</span>
          </li>
          <li>
            <b>{userInfo.public_repos}</b>
            <span>repos</span>
          </li>
        </ul>
      </div>
    );
  }
});

export default UserInfo;
