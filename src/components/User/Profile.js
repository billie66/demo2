import React from 'react';
import UserInfo from './UserInfo';
import Repos from './Repos';
import helpers from '../utils/helpers';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      user: {},
    };
  }

  componentDidMount() {
    const userName = this.props.params.userName;

    helpers.getGithubInfo(userName)
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos
        });
      });
  }

  render() {
    const userName = this.props.params.userName;
    return (
      <div>
        <UserInfo userName={userName} userInfo={this.state.user} />
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}

export default Profile;
