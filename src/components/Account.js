import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import helpers from './utils/helpers';
import Repos from './user/Repos';
import UserInfo from './user/UserInfo';
import Footer from './shared/Footer';
import { _ } from 'underscore';

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
    const userName = this.refs.username.getValue();
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

    if(!_.isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />

          <RaisedButton
            style={{display: 'block', margin: '0 auto', width: '180px'}}
            primary={true}
            label="save" />
        </div>
      );
    }

    return (
      <div className='account'>
        <Card className='content'>
          <DatePicker
            ref='birthday'
            hintText="Birthday"
            autoOk={false}
            minDate={this.state.minDate}  />

          <form onSubmit={this._handleSubmit}>
            <TextField
              hintText="Github Account"
              ref='username'/>

            <FlatButton
              type="submit"
              primary={true}
              label="search github" />
          </form>

          { GitHubInfo }
        </Card>

        <Footer />
      </div>
    );
  }
});

export default Account;
