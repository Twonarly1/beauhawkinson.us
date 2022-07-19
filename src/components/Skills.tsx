import Image from 'next/image'
import React from 'react'
import { Skill } from '../../typings'
import Heading from './Heading'

const skills: Skill[] = [
  {
    name: 'React',
    src: '/images/skills/react.svg',
    url: 'https://reactjs.org/docs/getting-started.html',
    stack: true,
  },
  {
    name: 'Next',
    src: '/images/skills/next.svg',
    url: 'https://nextjs.org/docs',
    stack: true,
  },
  {
    name: 'Apollo',
    src: '/images/skills/apollo.svg',
    url: 'https://www.apollographql.com/docs/apollo-server/',
    stack: true,
  },
  {
    name: 'GraphQL',
    src: '/images/skills/graphql.svg',
    url: 'https://graphql.org/graphql-js/',
    stack: true,
  },
  {
    name: 'Tailwind',
    src: '/images/skills/tailwind.svg',
    url: 'https://tailwindcss.com/docs/installation',
    stack: true,
  },
  {
    name: 'TypeScript',
    src: '/images/skills/ts.png',
    url: 'https://www.typescriptlang.org/docs/',
    stack: true,
  },
  {
    name: 'Nodejs',
    src: '/images/skills/node.svg',
    url: 'https://nodejs.org/en/docs/guides/getting-started-guide/',
    stack: true,
  },
  {
    name: 'Ethereum',
    src: '/images/skills/ethereum.svg',
    url: 'https://ethereum.org/en/',
    stack: false,
  },
  {
    name: 'Solidity',
    src: '/images/skills/solidity.svg',
    url: 'https://docs.soliditylang.org/en/v0.8.13/',
    stack: false,
  },
  {
    name: 'Firebase',
    src: '/images/skills/firebase.svg',
    url: 'https://firebase.google.com/',
    stack: false,
  },
  {
    name: 'Oauth',
    src: '/images/skills/oauth.svg',
    url: 'https://oauth.net/getting-started/',
    stack: false,
  },
  {
    name: 'JavaScript',
    src: '/images/skills/js.png',
    url: 'https://www.javascript.com/',
    stack: false,
  },
  {
    name: 'StepZen',
    src: '/images/skills/stepzen.svg',
    url: 'https://www.javascript.com/',
    stack: false,
  },
  {
    name: 'Vercel',
    src: '/images/skills/vercel.svg',
    url: 'https://vercel.com/home',
    stack: false,
  },
  {
    name: 'Ceramic',
    src: '/images/skills/ceramic.png',
    url: 'https://ceramic.network/',
    stack: false,
  },
  {
    name: 'Lens',
    src: '/images/skills/lens.jpeg',
    url: 'https://lens.xyz/',
    stack: false,
  },
  {
    name: 'Sanity',
    src: '/images/skills/sanity.png',
    url: 'https://sanity.io/',
    stack: false,
  },
  {
    name: 'Supabase',
    src: '/images/skills/supabase.svg',
    url: 'https://supabase.com/',
    stack: false,
  },
  {
    name: 'Vue',
    src: '/images/skills/vue.png',
    url: 'https://vuejs.org/',
    stack: false,
  },
  {
    name: 'ThirdWeb',
    src: '/images/skills/third.png',
    url: 'https://thirdweb.com/',
    stack: false,
  },
  {
    name: 'Truffle Suite',
    src: '/images/skills/truffle.png',
    url: 'https://trufflesuite.com/',
    stack: false,
  },
  {
    name: 'Hardhat',
    src: '/images/skills/hardhat.svg',
    url: 'https://hardhat.org/',
    stack: false,
  },
]

const Skills = () => {
  return (
    <div className="mx-auto mt-32 max-w-5xl px-6">
      <Heading
        title={'Skills'}
        subtitle={' Tools I Have Experience With'}
        legend={'* preferred stack'}
      />

      <div className="mt-12 grid max-w-5xl grid-cols-3 gap-2 sm:grid sm:grid-cols-5 md:grid md:grid-cols-7">
        {skills.map((skill: Skill, index: number) => (
          <a
            key={index}
            className={`rounded-lg border p-4 hover:shadow-sm dark:shadow-sm ${
              skill.stack
                ? 'border-pink-300 hover:border-pink-400 dark:border-pink-300 dark:hover:border-pink-400 dark:hover:shadow-pink-400'
                : 'border-gray-300 hover:border-gray-400 dark:border-gray-400 hover:dark:border-gray-300 hover:dark:shadow-white'
            }`}
            href={skill.url}
          >
            <div className="relative mx-auto h-10 w-10">
              <Image
                src={skill.src}
                alt={skill.name}
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p className="truncate pt-2 text-center text-[10px] text-gray-500 hover:text-gray-900 dark:text-gray-300">
              {skill.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Skills
