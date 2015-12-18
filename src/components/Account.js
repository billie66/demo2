import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import helpers from './utils/helpers';
import Repos from './user/Repos';
import UserInfo from './user/UserInfo';

class Account extends React.Component {
  constructor(props) {
    super(props);

    let minDate = new Date();
    let maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      repos: [],
      user: {},
      birthday: {},
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value;
    const birthday = this.refs.birthday.getDate();

    helpers.getGithubInfo(userName)
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos
        });
      });
  }

  render() {
    let GitHubInfo;

    if(this.state.user && this.state.repos) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
        </div>
      );
    }

    return (
      <div className='account'>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div>
            <input type='text' ref='userName' />
          </div>

          <DatePicker
            ref='birthday'
            hintText="Your Birthday"
            autoOk={false}
            minDate={this.state.minDate}  />

          <div>
            <button type='submit'></button>
          </div>
        </form>
        { GitHubInfo }
      </div>
    );
  }
}

export default Account;
