import React from 'react'
import Heading from './Heading'
import Nav from './Nav'
import { ProfileImage } from './ProfileImage'

export const Header = () => (
  <section className="w-full bg-gray-100">
    <Nav />
    <div className="pb-[90px]">
      <ProfileImage />
      <div className="text-center">
        <Heading
          title={"Hey, I'm Beau!"}
          subtitle={'  I contribute and develop in the Web3 space.'}
        />
      </div>

      <div className="pt-6 text-center md:mx-auto">
        <a
          className="mx-1 rounded bg-blue-200 py-1 px-2 text-blue-800 hover:bg-blue-300 md:mx-2"
          data-splitbee-event="Open Twitter"
          href="https://twitter.com/twonarly"
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
