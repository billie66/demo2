import React from 'react';

class UserInfo extends React.Component {
  render() {
    return (
      <div>{this.props.userInfo}</div>
    );
  }
}

UserInfo.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
};

export default UserInfo;
