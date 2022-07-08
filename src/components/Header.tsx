import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

export const Header: React.FC<{
  size?: number
}> = ({ size = 161.8 }) => (
  <section className="w-full  bg-gray-100">
    <Nav />
    <div className="">
      <div className="flex flex-col items-center pt-16 pb-8">
        <Image
          className="rounded-full"
          src={'/images/profilepic.jpg'}
          alt="Portrait photo of me"
          height={size}
          quality={100}
          width={size}
        />
      </div>{' '}
      <h1 className="text-center text-4xl font-bold">Hey, I'm Beau!</h1>
      <p className="mt-4 p-3 text-center text-2xl text-gray-500">
        I contribute and develop in the Web3 space.
      </p>
      <div className="pt-6 pb-32 text-center md:mx-auto">
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
          href="https://github.com/Twonarly1"
        >
          GitHub
        </a>
        {/* <a
            className="mx-1 rounded bg-pink-200 py-1 px-2 text-pink-800 hover:bg-pink-300 md:mx-2"
            data-splitbee-event="Open LinkedIn"
            href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/"
          >
            LinkedIn
          </a> */}
        <a
          href={'/Resume.pdf'}
          className="mx-1 rounded bg-purple-200 py-1 px-2 text-purple-800 hover:bg-purple-300 md:mx-2"
          data-splitbee-event="Open LinkedIn"
        >
          Resume
        </a>
      </div>
    </div>
  </section>
)
