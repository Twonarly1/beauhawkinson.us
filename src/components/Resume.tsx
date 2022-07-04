import Image from 'next/image'
import React from 'react'

const Resume = ({ data }) => {
  if (data) {
    var skills = data.skills.map(function (skill) {
      var src = '/images/skills/' + skill.src
      return (
        <div key={skill.name} className="h-fit rounded-lg border p-4">
          <a
            href={skill.url}
            //@ts-ignore
            name={skill.name}
          >
            <div className="relative mx-auto h-24 w-24">
              <Image
                src={src}
                alt={skill.name}
                className="rounded-lg"
                objectFit="contain"
                // height={32}
                // width={32}
                layout="fill"
              />
            </div>
            <p className="pt-4 text-center"> {skill.name}</p>
          </a>
        </div>
      )
    })
    var certificates = data.certificates.map(function (certificate) {
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
                className="mx-auto w-80 object-cover shadow-md
              "
              />
            </a>
            <h5 className="skillName"> {certificate.name}</h5>
          </div>
        </div>
      )
    })
  }

  return (
    <div id="resume" className="w-full max-w-5xl p-3">
      <h1 className="text-4xl font-bold">Skills</h1>
      <div className="text-2xl text-gray-600">
        Things I Have Used in the Past
      </div>
      <div className="mt-12 grid  max-w-5xl grid-cols-2 gap-2 overflow-auto scrollbar-hide md:grid md:grid-cols-4 md:space-y-0 lg:grid-cols-6">
        {skills}
      </div>
      <div className="pt-32">
        <h1 className="text-4xl font-bold">Work</h1>
        <div className="text-2xl text-gray-600">
          Things I Have Made in the Past
        </div>
      </div>
      <div className="mx-auto mt-12 mb-12 max-w-4xl md:grid md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl">
        {certificates}
      </div>
    </div>
  )
}

export default Resume
