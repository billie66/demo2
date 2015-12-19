import React from 'react';
import { _ } from 'underscore';

const Repos = React.createClass({
  render() {
    const repoList = _.map(this.props.repos, (repo) => {
      return (
        <li key={repo.id}>
          <div>
            <p className='name'>{repo.name}</p>
            <p className='desc'>{repo.description}</p>
          </div>
          <p className='lang'>{repo.language}</p>
        </li>
      );
    });

    return (
      <ul className="user-repos">
        { repoList }
      </ul>
    );
  }
});

export default Repos;
