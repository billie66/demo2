import React, { Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: '0',
    };
  }

  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex(),
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tabIndex: this._getSelectedIndex(),
    });
  }

  _handleTabsChange(value, e, tab) {
    this.props.history.pushState(null, tab.props.route)
    this.setState({tabsIndex: this._getSelectedIndex()});
  }

  _getSelectedIndex() {
    return this.props.history.isActive('/home') ? '1' :
      this.props.history.isActive('/account') ? '2' :
      this.props.history.isActive('/about') ? '3' : '0';
  }

  render() {
    let styles = {
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase',
      },
      tab: {
        height: '64px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px',
      },
    };
    return (
      <div className="app-header">
        <Tabs
          style={styles.tabs}
          tabItemContainerStyle={{backgroundColor: 'transparent'}}
          inkBarStyle={styles.inkBar}
          value={this.state.tabIndex}
          onChange={this._handleTabsChange.bind(this)}>
          <Tab
            value='1'
            label='Home'
            route='/home'
            style={styles.tab} />
          <Tab
            value='2'
            label='Account'
            route='/account'
            style={styles.tab} />
          <Tab
            value='3'
            label='About'
            route='/about'
            style={styles.tab} />
        </Tabs>
      </div>
    );
  }
}

export default NavBar;
