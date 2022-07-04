import React from 'react'
import TypeWriter from 'react-typewriter'
import { DownloadIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
const Header = ({ data }) => {
  if (data) {
    var name = data.name
    var occupation = data.occupation
    var description = data.description
    var city = data.address.city
    var state = data.address.state
    var profilepic = 'images/' + data.image
    var resumeDownload = data.resumedownload
    var networks = data.social.map(function (network) {
      var pic = '/images/networks/' + network.pic
      return (
        <div key={network.network} className="">
          <a href={network.link} network={network.network}>
            <img
              alt={network.network}
              src={pic}
              className="socialIcon hover:text-orange"
            />
          </a>
        </div>
      )
    })
  }

  return (
    <section className="w-full  bg-gray-100">
      <nav className="my-4 mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href="/">
          <a className="ml-2 px-2 py-1">bhawkinson.eth </a>
        </Link>
        <ul className="flex">
          {/* <li>
        <Link href="/blog">
          <a className="text-blue-600 mr-2 px-2 py-1 rounded-md">Blog</a>
        </Link>
      </li> */}
          <li>
            <Link href="/work">
              <a className="mr-2 rounded-md px-2 py-1 text-blue-700">Work</a>
            </Link>
          </li>
        </ul>
      </nav>{' '}
      <div className="">
        <div className="my-16 flex flex-col items-center">
          <div
            className="relative rounded-full"
            style={{
              width: 128,
              height: 128,
              backgroundColor: '#FCC098',
            }}
          >
            <Image
              className="rounded-full"
              src={'/images/profilepic.jpg'}
              alt="Portrait photo of me"
              height={128}
              quality={85}
              width={128}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  'inset 0 0 0 1px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.2)',
              }}
            />
          </div>{' '}
          <h1 className="mt-2 text-4xl font-bold">Hey, I'm Beau!</h1>
          <p className="text-center text-2xl text-gray-700">
            I design and build apps, and everything that comes with it.
          </p>
          <h3 className="city">
            Based in {city}, {state}.
          </h3>
          <div className="my-6 -ml-2 max-w-sm md:mx-auto">
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
              href="https://dribbble.com/timolins"
            >
              Dribbble
            </a>
          </div>
          <div>
            <a href={resumeDownload} className="resumeDownload">
              <DownloadIcon className="downloadIcon" />
              <div className="download">Download Resume</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
