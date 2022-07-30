import Image from 'next/image'
import React from 'react'
import TimeAgo from 'react-timeago'
import { FingerPrintIcon } from '@heroicons/react/outline'
import { Certificate } from '../../../typings'
import useIsMobile from '../../lib/useIsMobile'
import Heading from '../Heading'

const certificates: Certificate[] = [
  {
    name: 'Solidity Basics',
    src: '/images/certificates/solidity-basics.webp',
    url: 'https://github.com/smartcontractkit/full-blockchain-solidity-course-js',
    date: 'Jul 30, 2022',
    description: 'Solidity Basics. Patrick Collins - Chainlink - FCC',
  },
  {
    name: 'Blockchain Basics',
    src: '/images/certificates/blockchain-basics.webp',
    url: 'https://github.com/smartcontractkit/full-blockchain-solidity-course-js',
    date: 'Jul 30, 2022',
    description: 'Blockchain Basics. Patrick Collins - Chainlink - FCC',
  },
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
    <div className="section">
      <Heading title={'Achievements'} subtitle={'Certifications and More.'} />
      <div className="mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
        {certificates.map((certificate, index: number) => (
          <div
            key={index}
            className="commonBordering relative flex cursor-pointer items-center p-2 px-6 dark:bg-slate-800 "
          >
            <Image
              src={certificate.src}
              alt={certificate.name}
              height={100}
              width={100}
              quality={100}
            />
            <div className="ml-2 text-left">
              <p className="w-auto text-gray-900 hover:opacity-0 dark:text-gray-100 sm:w-80">
                {certificate.name}
              </p>
              <TimeAgo
                date={certificate.date}
                className="text-sm hover:opacity-0"
              />
            </div>
            {mobile == true && <FingerPrintIcon className="h-6 w-6" />}
            <div className="commonBordering absolute inset-0 z-10 flex items-center justify-center border-none text-center text-[10px] text-gray-900 opacity-0 hover:opacity-100 dark:bg-slate-800 dark:text-gray-100 sm:p-2 sm:text-sm">
              {certificate.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
