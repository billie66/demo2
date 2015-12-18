import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';

let menuItems = [
  { route: '/home', text: 'Home' },
  { route: '/account', text: 'Account' },
  { route: '/about', text: 'About' },
];

const AppLeftNav = React.createClass({
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
        marginBottom: '8px'
      }
    };

    let header = (
      <div style={styles.header}>
        S2
      </div>
    );

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  },

  toggle() {
    this.refs.leftNav.toggle();
  },

  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.props.history.isActive(currentItem.route)) return i;
    }
  },

  _onLeftNavChange(e, key, menuItem) {
    this.props.history.pushState(null, menuItem.route);
  },

});

export default AppLeftNav;
