import React from 'react';
import { _ } from 'underscore';

class Repos extends React.Component {
  render() {
    const repoList = _.map(this.props.repos, (repo) => {
      return (
        <li key={repo.id}>
          <div>
            <p className='name'>{repo.name}</p>
            <p className='lang'>{repo.language}</p>
          </div>
          <p className='desc'>{repo.description}</p>
        </li>
      );
    });

    return (
      <ul className="user-repos">
        { repoList }
      </ul>
    );
  }
}

export default Repos;
