/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Repo } from '../../../typings'
import { StarIcon } from '@heroicons/react/outline'
import Heading from '../Heading'
import Link from 'next/link'

type Props = {
  pinnedItems: Repo[]
}

const Pinned = ({ pinnedItems }: Props) => {
  return (
    <div className="section">
      <Heading title={'Projects'} subtitle={'My Pinned Repos'} />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pinnedItems.map((item: Repo, index: number) => (
          <div
            key={index}
            className="relative flex items-center gap-x-4 rounded-lg border border-gray-300 bg-gray-50 px-6 py-5 hover:border-gray-400 hover:shadow-md dark:border-gray-400 dark:bg-slate-800 hover:dark:border-gray-300 dark:hover:shadow-sm hover:dark:shadow-white [&>*:nth-child(3)_p:first-child]:hover:text-yellow-500"
          >
            <div className="absolute top-1 right-2 mx-auto w-fit justify-between">
              {item.stargazerCount > 0 && (
                <p className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-500  " />
                  <span className="text-sm dark:text-gray-400">
                    {item.stargazerCount}
                  </span>{' '}
                </p>
              )}
            </div>
            <img
              src={item.openGraphImageUrl}
              alt={item.name}
              className="h-20 w-20 rounded-full "
            />
            <a href={item.url} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {item.name}
              </p>
              <p className="text-sm">{item.description}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="flex cursor-default flex-col items-center justify-center py-4 text-center">
        <div className="text-gray-900 dark:text-gray-100">
          Explore more of my work
        </div>
        <Link href="/projects">
          <a className="mt-2 rounded-md border border-gray-300 bg-gray-50 py-1 px-6 text-gray-900 hover:border-gray-400 hover:shadow-md dark:bg-slate-800 dark:text-gray-100 dark:hover:shadow-sm dark:hover:shadow-white">
            View all
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Pinned
