import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import '../stylesheets/main.scss';
import NavBar from './shared/NavBar';
// import AppLeftNav from './shared/AppLeftNav';

class App extends React.Component {
  componentWillMount() {
    let setTabsState = function() {
      this.setState({renderTabs: !(document.body.clientWidth <= 647)});
    }.bind(this);
    setTabsState();
    window.onresize = setTabsState;
  }

  render() {
    return (
      <div >
        { this.state.renderTabs ? (
          <NavBar history={this.props.history} />
        ) : this._getAppBar() }

        {this.props.children}
      </div>
    );
  }

  _getAppBar() {
    let title = this.props.history.isActive('/home') ? 'Home' :
      this.props.history.isActive('/account') ? 'Account' :
      this.props.history.isActive('/about') ? 'About' : '';

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={1}
          style={{position: 'absolute', top: 0}}/>
      </div>
    );
  }

  _onLeftIconButtonTouchTap() {
    // this.refs.leftNav.toggle();
  }
}

export default App;
