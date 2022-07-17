/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import Heading from './Heading'
import TimeAgo from 'react-timeago'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Certificate } from '../../typings'

const certificates: Certificate[] = [
  {
    name: 'Apollo Graph Associate',
    src: '/images/certificates/associate.svg',
    url: 'https://www.apollographql.com/tutorials/certifications/84c7debb-7749-4eef-a19b-67d766d1d1be',
    date: 'Apr 10, 2022',
    description:
      'Developers who obtain this certification possess a solid foundational knowledge of GraphQL and the Apollo tool suite to design a schema, run an Apollo Server, and perform queries with Apollo Client on the frontend.',
  },
  {
    name: 'Apollo Graph Professional',
    src: '/images/certificates/professional.svg',
    url: 'https://www.apollographql.com/tutorials/certifications/84c7debb-7749-4eef-a19b-67d766d1d1be',
    date: 'Jul 7, 2022',
    description:
      'Developers who obtain this certification demonstrate strong familiarity with Apollo Federation concepts. They can apply those concepts to build a federated supergraph or move an existing monolithic graph to federation.',
  },
]

const Achievements = () => {
  return (
    <div className="w-full max-w-5xl">
      <Heading title={'Achievements'} subtitle={'Certifications and More.'} />
      <div className="flex">
        <div className="mx-auto mt-12 ">
          {certificates
            .map((certificate, index: number) => (
              <div key={index}>
                <div className="mb-6 items-center space-x-4">
                  <Disclosure>
                    <div className="flex space-x-4 rounded-lg border border-gray-300 p-3 hover:border-gray-400 hover:shadow-lg">
                      <Image
                        src={certificate.src}
                        alt=""
                        height={100}
                        width={100}
                        quality={100}
                        className=""
                      />
                      <Disclosure.Button className=" py-2">
                        <ul className=" text-xl">
                          <li className="flex items-center text-gray-900 dark:text-gray-200">
                            {certificate.name}
                          </li>
                          <li className="flex w-60 text-right text-xs text-gray-500">
                            <TimeAgo date={certificate.date} />
                          </li>
                          <li>
                            <div className="mt-2 w-fit rounded-full border border-gray-400 p-[2px] text-gray-400 dark:border-gray-200">
                              <ChevronDownIcon className="h-4 w-4 text-gray-400 dark:text-gray-200" />
                            </div>
                          </li>
                        </ul>
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="mt-4 p-2 text-gray-500">
                      <ul className="mx-auto w-[400px]">
                        <li className="">{certificate.description}</li>
                        <li className="mt-2">
                          <a
                            href={certificate.url}
                            className=" hover-underline text-sm text-black"
                          >
                            <p className="hover:underline">
                              View Certificate... &rarr;
                            </p>
                          </a>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </Disclosure>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>

      {/* <div className="flex justify-center pt-24">
        <button
          className="shadow-xs rounded border border-gray-300 px-2 py-1 text-gray-800"
          data-splitbee-event="Toggle Achievements"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less ↑' : 'Show more ↓'}
        </button>
      </div> */}
    </div>
  )
}

export default Achievements
