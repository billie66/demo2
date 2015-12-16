import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';

const standardActions = [
  {
    text: 'Okay',
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.userName.value;
    this.props.history.pushState(null, `profile/${userName}`);
  }

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  _handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <div className="home">
        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this._handleRequestClose.bind(this)}>
          1-2-3-4-5
        </Dialog>
        <h1>material-ui</h1>
        <h2>example project</h2>
        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap.bind(this)} />

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input type="text" ref="userName" />
          </div>
          <div>
            <button type="submit">GitHub</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
