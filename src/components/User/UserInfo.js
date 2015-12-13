import React from 'react';
import { _ } from 'underscore';

class UserInfo extends React.Component {
  render() {
    const fields = ['public_repos', 'followers', 'following'];
    const infoList = _.map(fields, (field) => {
      return (
        <li key={field}>{field}: {this.props.userInfo[field]}</li>
      );
    });

    return (
      <div>
        <p>{this.props.userName}</p>
        <img src={this.props.userInfo['avatar_url']} />
        <ul>{ infoList  }</ul>
      </div>
    );
  }
}

UserInfo.propTypes = {
  userName: React.PropTypes.string.isRequired,
  userInfo: React.PropTypes.object.isRequired
};

export default UserInfo;
