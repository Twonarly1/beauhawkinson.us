import Image from 'next/image'
import React from 'react'
import { Skill } from '../../typings'
import Heading from './Heading'

const Skills = ({ data }) => {
  if (data) {
    var skills = data.skills.map((skill: Skill, index) => {
      var src = '/images/skills/' + skill.src
      return (
        <a
          key={index}
          className={`group h-fit rounded-lg border p-4 hover:shadow-md dark:bg-white ${
            skill.stack
              ? 'border border-pink-300 hover:border-pink-400'
              : 'border-gray-300 hover:border-gray-400  '
          }`}
          href={skill.url}
        >
          <div className="relative mx-auto h-10 w-10 rounded-full">
            <Image
              src={src}
              alt={skill.name}
              className="rounded-full"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p className=" mx-auto truncate pt-2 text-center text-[10px] text-gray-500 hover:text-gray-900 ">
            {skill.name}
          </p>
        </a>
      )
    })
  }

  return (
    <div className="w-full max-w-5xl">
      <Heading
        title={'Skills'}
        subtitle={' Tools I Have Experience With'}
        legend={'* preferred stack'}
      />

      <div className="mt-6 grid max-w-5xl grid-cols-3 gap-2 overflow-auto scrollbar-hide sm:grid sm:grid-cols-5 md:grid md:grid-cols-7">
        {skills}
      </div>
    </div>
  )
}

export default Skills
