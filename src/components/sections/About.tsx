import React from 'react'
import Heading from '../Heading'
import Image from 'next/image'
import hoverImage from '../../../public/images/profileImages/pfp.jpeg'
import pfp from '../../../public/images/profileImages/profilepic.jpg'

export default function About() {
  const size = 128
  return (
    <div className="section">
      <div className="mx-auto w-[128px] pt-16 pb-8 text-center">
        <div
          style={{ height: size, width: size }}
          className="relative flex-col rounded-full"
        >
          <Image
            className="rounded-full"
            src={pfp}
            alt="Portrait photo of me"
            objectFit="cover"
            layout="fill"
            quality={100}
          />
          <div
            style={{ height: size, width: size }}
            className="absolute inset-0 flex-col rounded-full bg-white opacity-0 hover:opacity-100"
          >
            <Image
              className="rounded-full"
              src={hoverImage}
              alt="Portrait photo of me"
              quality={100}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
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
