import React from 'react';
import { _ } from 'underscore';

class UserInfo extends React.Component {
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
}

UserInfo.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default UserInfo;
