import React from 'react';
import UserInfo from './UserInfo';
import Repos from './Repos';
import helpers from '../utils/helpers';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      bio: {},
    };
  }

  componentDidMount() {
    const userName = this.props.params.userName;

    helpers.getGithubInfo(userName)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      });
  }

  render() {
    const userName = this.props.params.userName;
    return (
      <div>
        <UserInfo userInfo={this.state.bio} />
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}

export default Profile;
