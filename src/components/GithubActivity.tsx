import React from 'react'
import { Repo } from '../../typings'
import Heading from './Heading'

const GithubActivity = ({ repos }) => {
  return (
    <div className="max-w-5xl">
      <Heading title={'GitHub Activity'} />
      <div className="grid grid-cols-1 gap-24  md:grid-cols-2 md:gap-32">
        <ul className="">
          <Heading subtitle={'Repos I Contributed to'} />
          <div className="divide-y divide-gray-200">
            {repos.contributedRepos.map((repo: Repo, index: number) => (
              <li key={index}>
                <a
                  href={repo.url}
                  className="my-4 -mx-4 block h-20 rounded-md p-4 text-lg hover:bg-gray-100 dark:hover:text-black"
                >
                  <div>
                    <span className="text-indigo-400">{repo.owner.login}/</span>
                    <span className="text-indigo-600">{repo.name}</span>
                  </div>
                  <div className="truncate text-base text-gray-500 dark:hover:text-black">
                    {repo.description}
                  </div>
                </a>
              </li>
            ))}
          </div>
          <a
            href={'https://github.com/Twonarly1?tab=repositories'}
            className="text-sm text-indigo-600"
          >
            View more on <span className="font-semibold">GitHub</span> →
          </a>
        </ul>

        <ul>
          <Heading subtitle={'Repos I Like'} />
          <div className="divide-y divide-gray-200">
            {repos.starredRepos.map((repo: Repo, index: number) => (
              <li key={index}>
                <a
                  href={repo.url}
                  className="my-4 -mx-4 block h-20 rounded-md p-4 text-lg hover:bg-gray-100 dark:hover:text-black"
                >
                  <div>
                    <span className="text-purple-400">{repo.owner.login}/</span>
                    <span className="text-purple-600">{repo.name}</span>
                  </div>
                  <div className="truncate text-base text-gray-500">
                    {repo.description}
                  </div>
                </a>
              </li>
            ))}
          </div>
          <a
            href={'https://github.com/Twonarly1?tab=stars'}
            className="text-sm text-purple-600"
          >
            View more on <span className="font-semibold">GitHub</span> →
          </a>
        </ul>
      </div>
    </div>
  )
}

export default GithubActivity
