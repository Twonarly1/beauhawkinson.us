import React from 'react'
import Heading from '../Heading'
import { ProfileImage } from '../ProfileImage'

export default function About() {
  return (
    <div className="section">
      <ProfileImage />
      <div className="text-center">
        <Heading
          title={"Hey, I'm Beau!"}
          subtitle={'I contribute and develop in the Web3 space.'}
        />
        <div className="pt-6 [&>*]:mx-[6px] [&>*]:rounded [&>*]:p-[4px]">
          <a
            className="bg-blue-200 text-blue-800 hover:bg-blue-300"
            data-splitbee-event="Open Twitter"
            href="https://twitter.com/twonarly"
          >
            Twitter
          </a>
          <a
            className="bg-gray-300 text-gray-800 hover:bg-gray-400"
            data-splitbee-event="Open GitHub"
            href="https://github.com/Twonarly1"
          >
            GitHub
          </a>
          <a
            className="bg-purple-200 text-purple-800 hover:bg-purple-300"
            data-splitbee-event="Open LinkedIn"
            href={'/7.17-resume.pdf'}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
