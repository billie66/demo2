import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class NavBar extends React.Component {
  constructor() {
    super();
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
      this.props.history.isActive('/playground') ? '2' :
      this.props.history.isActive('/about') ? '3' : '0';
  }

  render() {
    let styles = {
      tabs: {
        width: '300px',
      },
      tab: {
        height: '64px',
        color: '#727272',
      }
    };
    return (
      <div className="navbar">
        <Tabs
          style={styles.tabs}
          tabItemContainerStyle={{backgroundColor: '#fff'}}
          inkBarStyle={{height: '4px', marginTop: '-4px'}}
          value={this.state.tabIndex}
          onChange={this._handleTabsChange.bind(this)}>
          <Tab
            value='1'
            label='Home'
            route='/home'
            style={styles.tab} />
          <Tab
            value='2'
            label='Playground'
            route='/playground'
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
