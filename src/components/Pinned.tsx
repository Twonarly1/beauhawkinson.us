/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Repo } from '../../typings'
import { StarIcon } from '@heroicons/react/outline'
import Heading from './Heading'
import Link from 'next/link'

const Pinned = ({ pinnedItems }) => {
  return (
    <div className="mx-auto mt-32 max-w-5xl px-6">
      <Heading title={'Projects'} subtitle={'My Pinned Repos'} />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pinnedItems.map((item: Repo, index: number) => (
          <div
            key={index}
            className="relative flex items-center gap-x-4 rounded-lg border border-gray-300 bg-black/5 px-6 py-5 hover:border-gray-400 hover:shadow-md dark:border-gray-400 dark:bg-white/10 dark:shadow-sm hover:dark:border-gray-300 hover:dark:shadow-white [&>*:nth-child(3)_p:first-child]:hover:text-yellow-500"
          >
            <div className="absolute top-1 right-2 mx-auto w-fit justify-between  text-[10px] text-gray-500">
              {item.stargazerCount > 0 && (
                <p className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-500  " />
                  <span className="text-sm dark:text-gray-300">
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
                <p className="text-sm text-gray-400">{item.description}</p>
              </p>
            </a>
          </div>
        ))}
      </div>

      <div className="flex cursor-default flex-col items-center justify-center py-4 text-center">
        <div className="text-gray-500 dark:text-gray-400">
          Explore more of my work
        </div>
        <Link href="/projects">
          <a className="mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-800">
            View all
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Pinned
