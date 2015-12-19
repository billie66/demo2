import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import helpers from './utils/helpers';
import Repos from './user/Repos';
import UserInfo from './user/UserInfo';
import Footer from './shared/Footer';

const Account = React.createClass({
  getInitialState() {
    let minDate = new Date();
    let maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);

    return {
      minDate: minDate,
      repos: [],
      user: {},
      birthday: {},
    };
  },

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
  },

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
        <form onSubmit={this._handleSubmit}>
          <div>
            <input type='text' ref='userName' />
          </div>
          { GitHubInfo }
          <DatePicker
            ref='birthday'
            hintText="Your Birthday"
            autoOk={false}
            minDate={this.state.minDate}  />

          <div>
            <button type='submit'>Save</button>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
});

export default Account;
