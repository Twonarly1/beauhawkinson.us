import React from 'react'
import { Certificate } from '../../typings'
import Achievements from './Achievements'
import Heading from './Heading'

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

const CertificateList = () => {
  return (
    <div className=" max-w-5xl px-6">
      <Heading title={'Achievements'} subtitle={'Certifications and More.'} />
      <div className="mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
        {certificates.map((certificate, index: number) => (
          <Achievements key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}

export default CertificateList
