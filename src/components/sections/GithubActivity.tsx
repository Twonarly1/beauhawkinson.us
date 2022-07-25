import React from 'react'
import { Repo } from '../../../typings'
import Heading from '../Heading'

type Props = {
  starredItems: Repo[]
}

const GithubActivity = ({ starredItems }: Props) => {
  return (
    <div className="section">
      <Heading title={'GitHub Activity'} subtitle={'Repos I Like'} />
      <div className="flex items-center justify-center lg:px-16">
        <div className="relative w-full max-w-lg ">
          <div className="blobAnimation top-40 -left-4 bg-purple-300 dark:bg-purple-500"></div>
          <div className="animation-delay-2000 blobAnimation top-40 -right-4 bg-yellow-300 dark:bg-yellow-500"></div>
          <div className="animation-delay-4000 blobAnimation top-56 left-20 bg-pink-300 dark:bg-red-500"></div>
          <div className="relative z-10 space-y-4">
            <div className="relative mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
              {starredItems?.map((item: Repo, index: number) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    className="commonBordering relative flex items-center p-3 dark:bg-slate-800"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="offColorHeading text-lg font-medium">
                        {item.owner.login}/
                      </span>
                      <span className="text-sm dark:text-blue-300">
                        {item.name}
                      </span>
                      <div className="text-sm ">{item.description}</div>
                    </div>
                  </a>
                )
              })}

              <a
                href={'https://github.com/Twonarly1?tab=stars'}
                className="offColorHeading mx-auto text-sm "
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
