import React from 'react'
import { Repo } from '../../typings'
import Heading from './Heading'

const GithubActivity = ({ starredItems }) => {
  return (
    <div className="max-w-5xl">
      <Heading title={'GitHub Activity'} />
      <ul>
        <Heading subtitle={'Repos I Like'} />
        <div className="mx-auto mt-6 grid w-fit grid-cols-1 space-y-2">
          {starredItems.map((item: Repo, index: number) => (
            <li key={index}>
              <a
                href={item.url}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 hover:border-gray-400 hover:shadow-md"
              >
                <div className="min-w-0 flex-1">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span className="text-lg font-medium text-gray-900">
                      {item.owner.login}/
                    </span>
                    <span className="truncate text-[16px] text-gray-500">
                      {item.name}
                    </span>
                    <div className="mt-1 text-gray-500">{item.description}</div>
                  </a>
                </div>
              </a>
            </li>
          ))}
          <a
            href={'https://github.com/Twonarly1?tab=stars'}
            className="mx-auto text-sm text-purple-600"
          >
            View more on <span className="font-semibold">GitHub</span> →
          </a>
        </div>
      </ul>
    </div>
  )
}

export default GithubActivity
