import Image from 'next/image'
import React, { useState } from 'react'

const Achievements = ({ data }) => {
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
                className="mx-auto h-fit w-fit object-cover shadow-md
              "
              />
            </a>
            <h5 className=""> {certificate.name}</h5>
          </div>
        </div>
      )
    })
  }
  const [showMore, setShowMore] = useState(false)
  console.log(data)
  return (
    <div id="resume" className="w-full max-w-5xl p-3">
      <div className="pt-32">
        <h1 className="text-4xl font-bold">Achievements</h1>
        <div className="text-2xl text-gray-600">Things I Have Achieved</div>
      </div>
      <div className="mx-auto gap-6 space-y-6 py-12 md:grid md:grid-cols-2 md:space-y-0">
        {certificates}
      </div>
      <div className="flex justify-center pt-24">
        <button
          className="shadow-xs rounded border border-gray-300 px-2 py-1 text-gray-800"
          data-splitbee-event="Toggle Achievements"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less ↑' : 'Show more ↓'}
        </button>
      </div>
    </div>
  )
}

export default Achievements
