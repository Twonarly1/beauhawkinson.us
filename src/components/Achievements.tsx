import React, { useState } from 'react'
import SidebarRow from './List'
import { BadgeCheckIcon } from '@heroicons/react/outline'

import Briefcase from '../assets/achievements/briefcase.svg'
import Lock from '../assets/achievements/lock.svg'
import Certificate from '../assets/achievements/certificate.svg'
import Trophy from '../assets/achievements/trophy.svg'

const Achievements = ({ data }) => {
  const [showMore, setShowMore] = useState(false)
  if (data) {
    var certificates = data.certificates?.map(function (certificate) {
      var src = '/images/certificates/' + certificate.src
      return (
        <div key={certificate.name} className=" md:h-40">
          <div className="">
            <a
              href={certificate.url}
              //@ts-ignore
              name={certificate.name}
            >
              <img
                alt={certificate.name}
                src={src}
                className="mx-auto h-fit w-fit rounded-lg object-cover shadow-md
              "
              />
            </a>
            <h5 className=""> {certificate.name}</h5>
          </div>
        </div>
      )
    })
  }
  return (
    <div id="resume" className="mb-24 w-full max-w-5xl p-3">
      <div className="p-3 pt-32">
        <div className="text-4xl font-bold">Achievements</div>
        <div className="text-2xl text-gray-600">Certifications and more...</div>
      </div>
      <div className="mx-auto gap-6 space-y-6 p-3 pt-6 md:grid md:grid-cols-2 md:space-y-0">
        {certificates}
      </div>
      {/* <div className=" mt-6 flex items-center">
        <SidebarRow
          Icon={BadgeCheckIcon}
          title="Registered"
          src={Certificate}
          content=""
        />
      </div>
      <div className=" mt-6 flex items-center">
        <SidebarRow
          Icon={BadgeCheckIcon}
          title="Registered"
          src={Trophy}
          content=""
        />
      </div>
      <div className=" mt-6 flex items-center">
        <SidebarRow
          Icon={BadgeCheckIcon}
          title="Registered"
          src={Lock}
          content=""
        />
      </div>
      <div className=" mt-6 flex items-center">
        <SidebarRow
          Icon={BadgeCheckIcon}
          title="Registered"
          src={Briefcase}
          content=""
        />
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
