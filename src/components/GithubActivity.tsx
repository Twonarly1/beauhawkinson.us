import React from 'react'
import { Repo } from '../../typings'
import Heading from './Heading'

const GithubActivity = ({ starredItems }) => {
  return (
    <div className="mx-auto mt-32 max-w-5xl px-6">
      <Heading title={'GitHub Activity'} subtitle={'Repos I Like'} />
      <div className="mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
        {starredItems?.map((item: Repo, index: number) => {
          return (
            <a
              key={index}
              href={item.url}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5  hover:border-gray-400 hover:shadow-sm dark:border-gray-400 dark:shadow-sm hover:dark:border-gray-300 hover:dark:shadow-white"
            >
              <div className="min-w-0 flex-1">
                <span className="absolute inset-0" aria-hidden="true" />
                <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {item.owner.login}/
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.name}
                </span>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </div>
              </div>
            </a>
          )
        })}
        <a
          href={'https://github.com/Twonarly1?tab=stars'}
          className="mx-auto text-sm text-purple-600"
        >
          View more on GitHub &rarr;
        </a>
      </div>
    </div>
  )
}

export default GithubActivity
