import Image from 'next/image'
import React from 'react'

const Resume = ({ data }) => {
  if (data) {
    var skills = data.skills.map(function (skill) {
      var src = '/images/skills/' + skill.src
      return (
        <div key={skill.name} className="h-fit rounded-lg border bg-white p-4">
          <a
            href={skill.url}
            //@ts-ignore
            name={skill.name}
          >
            <div className="relative mx-auto h-24 w-24">
              <Image
                src={src}
                alt={skill.name}
                className=""
                objectFit="contain"
                // height={32}
                // width={32}
                layout="fill"
              />
            </div>
            <p className="bg-white pt-4 text-center"> {skill.name}</p>
          </a>
        </div>
      )
    })
  }

  return (
    <div id="resume" className="w-full max-w-5xl cursor-default p-3 pt-32">
      <h1 className="text-4xl font-bold">Skills</h1>
      <div className="text-2xl text-gray-600">
        Things I Have Used in the Past
      </div>
      <div className="mt-6 grid  max-w-5xl grid-cols-2 gap-2 overflow-auto scrollbar-hide md:grid md:grid-cols-4 md:space-y-0 lg:grid-cols-6">
        {skills}
      </div>
    </div>
  )
}

export default Resume
