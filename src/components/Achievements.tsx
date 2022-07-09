import React, { useState } from 'react'
import Heading from './Heading'

const Achievements = ({ data }) => {
  const [showMore, setShowMore] = useState(false)
  if (data) {
    var certificates = data.certificates?.map(function (certificate) {
      var src = '/images/certificates/' + certificate.src
      return (
        <div key={certificate.name}>
          <a
            href={certificate.url}
            //@ts-ignore
            name={certificate.name}
          >
            <img
              alt={certificate.name}
              src={src}
              className="mx-auto h-fit w-fit rounded-lg object-cover shadow-md"
            />
          </a>
          <h5> {certificate.name}</h5>
        </div>
      )
    })
  }
  return (
    <div className="w-full max-w-5xl">
      <Heading title={'Achievements'} subtitle={'Certifications and More.'} />
      <div className="mx-auto gap-4 space-y-6 pt-6 md:grid md:grid-cols-2 md:space-y-0">
        {certificates}
      </div>

      {/* <div className=" mt-6 flex items-center">
        <SidebarRow
          Icon={BadgeCheckIcon}
          title="Certification"
          src={Certificate} //Lock, Trophy, Briefcase
          content=""
        />
      </div>

      </div> */}
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
