import React from 'react'

const GithubActivity = ({ repos }) => {
  return (
    <div className="max-w-5xl p-3 pt-32">
      <div className="p-3">
        <h1 className="text-4xl font-bold">GitHub Activity</h1>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-32">
          <ul>
            <h2 className="text-2xl text-gray-600">Repos I Contributed to</h2>

            {repos.contributedRepos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.url}
                  // data-splitbee-event={'Open External Link'}
                  // data-splitbee-event-url={repo.url}
                  className="my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100"
                >
                  <div>
                    <span className="text-blue-400">{repo.owner.login}/</span>
                    <span className="text-blue-600">{repo.name}</span>
                  </div>
                  <div>{repo.description}</div>
                </a>
              </li>
            ))}
          </ul>

          <ul>
            <p className="text-2xl text-gray-600">Repos I Like</p>

            {repos.starredRepos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.url}
                  // data-splitbee-event={'Open External Link'}
                  // data-splitbee-event-url={repo.url}
                  className="my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100"
                >
                  <div>
                    <span className="text-blue-400">{repo.owner.login}/</span>
                    <span className="text-blue-600">{repo.name}</span>
                  </div>
                  <div>{repo.description}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GithubActivity
