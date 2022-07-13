import React from 'react'
import Heading from './Heading'

const GithubActivity = ({ repos }) => {
  return (
    <div className="max-w-5xl">
      <Heading title={'GitHub Activity'} />
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-32">
        <ul>
          <Heading subtitle={'Repos I Contributed to'} />
          {repos.contributedRepos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.url}
                className="my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100 dark:hover:text-black"
              >
                <div>
                  <span className="text-blue-400">{repo.owner.login}/</span>
                  <span className="text-blue-600">{repo.name}</span>
                </div>
                <div className="">{repo.description}</div>
              </a>
            </li>
          ))}
          <a
            href={'https://github.com/Twonarly1?tab=repositories'}
            className="text-sm text-blue-600"
          >
            View more on <span className="font-semibold">GitHub</span> →
          </a>
        </ul>

        <ul>
          <Heading subtitle={'Repos I Like'} />
          {repos.starredRepos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.url}
                className="my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100 dark:hover:text-black"
              >
                <div>
                  <span className="text-blue-400">{repo.owner.login}/</span>
                  <span className="text-blue-600">{repo.name}</span>
                </div>
                <div className="dark:hover:text-black">{repo.description}</div>
              </a>
            </li>
          ))}
          <a
            href={'https://github.com/Twonarly1?tab=stars'}
            className="text-sm text-blue-600"
          >
            View more on <span className="font-semibold">GitHub</span> →
          </a>
        </ul>
      </div>
    </div>
  )
}

export default GithubActivity
