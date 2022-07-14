import { Disclosure } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Heading from './Heading'

const Skills = ({ data }) => {
  if (data) {
    var skills = data.skills.map((skill) => {
      var src = '/images/skills/' + skill.src
      return (
        <a
          key={skill.name}
          className={` group h-fit rounded-lg border p-5 shadow-md dark:bg-white ${
            skill.stack ? 'border-2 border-pink-300' : 'border-black'
          }`}
          href={skill.url}
          //@ts-ignore
          name={skill.name}
        >
          <div className="relative mx-auto h-12 w-12">
            <Image
              src={src}
              alt={skill.name}
              className=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p className=" mx-auto truncate pt-4 text-center text-[10px] dark:text-black ">
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
