import React from 'react';

class Repos extends React.Component {
  render() {
    return (
      <div>{this.props.repos}</div>
    );
  }
}

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired,
};

export default Repos;
