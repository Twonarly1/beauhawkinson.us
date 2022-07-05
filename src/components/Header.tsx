import React from 'react'
import TypeWriter from 'react-typewriter'
import { DownloadIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <section className="w-full  bg-gray-100">
      <nav className="my-4 mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href="/">
          <a className="ml-2 px-2 py-1">bhawkinson.eth </a>
        </Link>
        <ul className="flex">
          <li>
            <Link href="/work">
              <a className="mr-2 rounded-md px-2 py-1 text-gray-700">Work</a>
            </Link>
          </li>
        </ul>
      </nav>{' '}
      <div className="">
        <div className="my-16 flex flex-col items-center">
          <Image
            className="rounded-full"
            src={'/images/profilepic.jpg'}
            alt="Portrait photo of me"
            height={128}
            quality={85}
            width={128}
          />
        </div>{' '}
        <h1 className="mt-4 text-center text-4xl font-bold">Hey, I'm Beau!</h1>
        <p className="mt-4 text-center text-2xl text-gray-500">
          I design and build apps, and everything that comes with it.
        </p>
        <h3 className="mt-4 text-center text-xl text-gray-500">
          Based in St.Paul, Minnesota.
        </h3>
        <div className="my-6 text-center md:mx-auto">
          <a
            className="mx-1 rounded bg-blue-200 py-1 px-2 text-blue-800 hover:bg-blue-300 md:mx-2"
            data-splitbee-event="Open Twitter"
            href="https://twitter.com/timolins"
          >
            Twitter
          </a>
          <a
            className="mx-1 rounded bg-gray-300 py-1 px-2 text-gray-800 hover:bg-gray-400 md:mx-2"
            data-splitbee-event="Open GitHub"
            href="https://github.com/timolins"
          >
            GitHub
          </a>
          <a
            className="mx-1 rounded bg-pink-200 py-1 px-2 text-pink-800 hover:bg-pink-300 md:mx-2"
            data-splitbee-event="Open Dribbble"
            href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href={'/Resume.pdf'}
            className="mx-auto mt-16 flex w-60 justify-center space-x-2 rounded-lg bg-purple-200 py-2 text-purple-800 hover:bg-purple-300"
          >
            <DownloadIcon className="w-6 items-center" />
            <div className="items-center">Download Resume</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
