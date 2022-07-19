/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import TimeAgo from 'react-timeago'
import { FingerPrintIcon } from '@heroicons/react/outline'
import Heading from './Heading'
import useIsMobile from '../lib/useIsMobile'
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
  const mobile = useIsMobile()

  return (
    <div className="mx-auto mt-32 max-w-5xl px-6 ">
      <Heading title={'Achievements'} subtitle={'Certifications and More.'} />
      <div className="mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
        {certificates.map((certificate, index: number) => (
          <div
            key={index}
            className="relative flex cursor-pointer items-center justify-between space-x-4 rounded-lg border border-gray-300 p-2 px-6 hover:border-gray-400 hover:shadow-md dark:border-gray-400 dark:shadow-sm hover:dark:border-gray-300 hover:dark:shadow-white"
          >
            <Image
              src={certificate.src}
              alt={certificate.name}
              height={100}
              width={100}
              quality={100}
            />
            <div className="text-left">
              <p className="w-auto text-gray-900 hover:opacity-0 dark:text-gray-200 sm:w-80">
                {certificate.name}
              </p>
              <TimeAgo
                date={certificate.date}
                className="text-xs text-gray-500 hover:opacity-0"
              />
            </div>
            {mobile == true && <FingerPrintIcon className="h-6 w-6" />}
            <div className="absolute inset-0 right-2 z-10 flex items-center justify-center rounded-lg bg-white text-xs font-semibold text-gray-900 opacity-0 duration-300 ease-in-out hover:opacity-100 dark:bg-primary-dark  dark:text-gray-300">
              {certificate.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
