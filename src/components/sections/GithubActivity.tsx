import React from 'react'
import { Repo } from '../../../typings'
import Heading from '../Heading'

const GithubActivity = ({ starredItems }) => {
  return (
    <div className="section">
      <Heading title={'GitHub Activity'} subtitle={'Repos I Like'} />
      <div className="flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg ">
          <div className="absolute top-40 -left-4 z-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-20 mix-blend-multiply blur-sm filter dark:bg-purple-500 dark:opacity-100"></div>
          <div className="animation-delay-2000 absolute top-40 -right-4 z-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-20 mix-blend-multiply blur-sm filter dark:bg-yellow-500  dark:opacity-100"></div>
          <div className="animation-delay-4000 absolute top-56 left-20 z-0 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-20 mix-blend-multiply blur-sm filter dark:bg-red-500  dark:opacity-100"></div>
          <div className="relative z-10 space-y-4">
            <div className="relative mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
              {starredItems?.map((item: Repo, index: number) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    className="relative flex items-center rounded-lg border border-gray-300 bg-gray-50 p-3 hover:border-gray-400 hover:shadow-sm dark:border-gray-400 dark:bg-slate-800 dark:shadow-sm hover:dark:border-gray-300 hover:dark:shadow-white"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {item.owner.login}/
                      </span>
                      <span className="text-sm text-gray-400 dark:text-blue-300">
                        {item.name}
                      </span>
                      <div className="text-sm text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </a>
                )
              })}

              <a
                href={'https://github.com/Twonarly1?tab=stars'}
                className="mx-auto text-sm text-gray-100"
              >
                View more on GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubActivity
