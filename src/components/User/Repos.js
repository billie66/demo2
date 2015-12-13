import React from 'react';
import { _ } from 'underscore';

class Repos extends React.Component {
  render() {
    const repoList = _.map(this.props.repos, (repo) => {
      return (
        <li key={repo.id}>
          <p>{repo.language}</p>
          <p>{repo.name}</p>
          <p>{repo.description}</p>
        </li>
      );
    });

    return (
      <ul>
        { repoList }
      </ul>
    );
  }
}

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired
};

export default Repos;
