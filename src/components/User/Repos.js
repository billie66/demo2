import React from 'react';
import { _ } from 'underscore';

const Repos = React.createClass({
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
});

export default Repos;
