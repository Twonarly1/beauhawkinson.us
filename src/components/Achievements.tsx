/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import Heading from './Heading'
import TimeAgo from 'react-timeago'
import { Disclosure } from '@headlessui/react'
import { DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import { Certificate } from '../../typings'

const certificates: Certificate[] = [
  {
    name: 'Apollo Graph Professional',
    src: '/images/certificates/professional.svg',
    url: 'https://www.apollographql.com/tutorials/certifications/84c7debb-7749-4eef-a19b-67d766d1d1be',
    date: 'Jul 7, 2022',
    description:
      'Developers who obtain this certification demonstrate strong familiarity with Apollo Federation concepts. They can apply those concepts to build a federated supergraph or move an existing monolithic graph to federation.',
  },
  {
    name: 'Apollo Graph Associate',
    src: '/images/certificates/associate.svg',
    url: 'https://www.apollographql.com/tutorials/certifications/84c7debb-7749-4eef-a19b-67d766d1d1be',
    date: 'Apr 10, 2022',
    description:
      'Developers who obtain this certification possess a solid foundational knowledge of GraphQL and the Apollo tool suite to design a schema, run an Apollo Server, and perform queries with Apollo Client on the frontend.',
  },
]

const Achievements = () => {
  const [showMore, setShowMore] = useState<boolean>()

  return (
    <div className=" max-w-5xl px-6">
      <Heading title={'Achievements'} subtitle={'Certifications and More.'} />
      <div className="mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
        {certificates.map((certificate, index: number) => (
          <Disclosure key={index}>
            <Disclosure.Button className="flex items-center justify-between space-x-4 rounded-lg border border-gray-300 p-2 px-6 hover:border-gray-400">
              <div className="flex items-center space-x-4">
                <Image
                  src={certificate.src}
                  alt={certificate.name}
                  height={100}
                  width={100}
                  quality={100}
                />
                <div className="text-left">
                  <p className="w-auto text-gray-900 dark:text-gray-200 sm:w-80">
                    {certificate.name}
                  </p>
                  <TimeAgo
                    date={certificate.date}
                    className=" text-xs text-gray-500"
                  />
                </div>
              </div>
              <DotsCircleHorizontalIcon className="h-6 w-6 shrink-0 rotate-90 text-gray-400 dark:text-gray-200" />
            </Disclosure.Button>
            <Disclosure.Panel className="mx-auto max-w-lg text-center text-gray-500">
              {certificate.description}
              <a href={certificate.url}>
                <p className="mt-2 text-sm text-gray-900 hover:underline dark:text-gray-300">
                  View Certificate... &rarr;
                </p>
              </a>
            </Disclosure.Panel>
          </Disclosure>
        ))}

        {/* <div className="flex justify-center pt-6">
          <button
            className="shadow-xs rounded border border-gray-300 px-2 py-1 text-gray-800"
            data-splitbee-event="Toggle Achievements"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less ↑' : 'Show more ↓'}
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Achievements
