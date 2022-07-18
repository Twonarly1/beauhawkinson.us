/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react'
import { Repo } from '../../typings'
//import Timeago from 'react-timeago'
import { StarIcon, XIcon } from '@heroicons/react/solid'
import Heading from './Heading'
import Link from 'next/link'
import { Transition, Dialog } from '@headlessui/react'

const Pinned = ({ pinnedItems }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className="px-6 pt-12">
      <Heading title={'Projects'} subtitle={'My Pinned Repos'} />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pinnedItems.map((item: Repo, index: number) => (
          <div
            key={index}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 hover:border-gray-400 hover:shadow-md dark:border-gray-400 dark:shadow-sm hover:dark:border-gray-300 hover:dark:shadow-white"
          >
            <div className="absolute top-0 right-2 mx-auto mt-2 w-fit justify-between text-center text-[10px] text-gray-500">
              {item.stargazerCount > 0 && (
                <p className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm">{item.stargazerCount}</span>{' '}
                </p>
              )}

              {/* <p>
                    created&nbsp;
                    <Timeago date={item.pushedAt} />
                  </p>
              <p>
                updated&nbsp;
                <Timeago date={item.updatedAt} />
              </p> */}
            </div>

            <div className="flex-shrink-0 rounded-full border-2 p-1 dark:border-gray-400">
              <img
                src={item.openGraphImageUrl}
                alt={item.name}
                className="h-16 w-16 rounded-full "
              />
            </div>
            <div className="min-w-0 flex-1">
              <a href={item.url} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.name}
                </p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex cursor-default flex-col items-center justify-center py-4 text-center">
        <Link href="/projects">
          <a
            href={'https://github.com/Twonarly1?tab=stars'}
            className="mx-auto text-center text-sm text-purple-600"
          >
            View more <span className="font-semibold">Here</span> →
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Pinned
