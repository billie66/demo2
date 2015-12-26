import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

const SelectableList = SelectableContainerEnhance(List);

class AppLeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNavOpen: false,
    };
  }

  render() {
    let styles = {
      header: {
        cursor: 'pointer',
        fontSize: '24px',
        color: '#fff',
        lineHeight: '64px',
        fontWeight: '300',
        backgroundColor: '#00bcd4',
        paddingLeft: '24px',
        paddingTop: '0px',
        marginBottom: '8px',
      },
      selectedList: {
        color: '#ff4081',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
      }
    };
    return (
      <LeftNav
        docked={false}
        open={this.state.leftNavOpen}
        onRequestChange={this.handleChangeRequestLeftNav.bind(this)}>
        <div style={styles.header}
          onTouchTap={this.handleTouchTapHeader.bind(this)}>
          S2
        </div>
        <SelectableList
          selectedItemStyle={styles.selectedList}
          valueLink={{
            value: this._getSelectedIndex(),
            requestChange: this.handleRequestChangeList.bind(this),
          }}>
          <ListItem
            value="home"
            primaryText="Home"/>
          <ListItem
            value="account"
            primaryText="Account"/>
          <ListItem
            value="about"
            primaryText="About"/>
        </SelectableList>
      </LeftNav>
    );
  }

  toggle() {
    this.setState({leftNavOpen: !this.state.leftNavOpen});
  }

  _getSelectedIndex() {
    let menuItems = ['home', 'account', 'about'];
    for (let i = menuItems.length - 1; i >= 0; i--) {
      if (menuItems[i] && this.props.history.isActive(menuItems[i])) return menuItems[i];
    }
  }

  handleChangeRequestLeftNav(open) {
    this.setState({
      leftNavOpen: open,
    });
  }

  handleRequestChangeList(event, value) {
    this.props.history.pushState(null, value);
    this.setState({
      leftNavOpen: false,
    });
  }

  handleTouchTapHeader() {
    this.props.history.pushState(null, '/');
    this.setState({
      leftNavOpen: false,
    });
  }
}

export default AppLeftNav;

