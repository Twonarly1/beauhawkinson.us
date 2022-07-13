/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import Heading from './Heading'
import TimeAgo from 'react-timeago'
import { Disclosure } from '@headlessui/react'
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
const Achievements = ({ data }) => {
  const [showMore, setShowMore] = useState(false)
  if (data) {
    var certificates = data.certificates
      ?.map(function (certificate, index) {
        var src = '/images/certificates/' + certificate.src
        return (
          <div key={index}>
            <div className="mb-6 items-center space-x-4">
              <Disclosure>
                <div className="flex space-x-4 ">
                  <Image
                    src={src}
                    alt=""
                    height={161}
                    width={161}
                    className=""
                  />
                  <Disclosure.Button className=" py-2">
                    <ul className=" text-xl">
                      <li className="flex items-center">{certificate.name}</li>
                      <li className="flex w-60 text-right text-xs">
                        <TimeAgo date={certificate.date} />
                      </li>
                      <li>
                        <div className="mt-1 w-fit rounded-full border border-black p-[2px]">
                          <ChevronDownIcon className=" h-4 w-4" />
                        </div>
                      </li>
                    </ul>
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel className="mt-4 p-2 text-gray-500">
                  <ul className="">
                    <li className="">{certificate.description}</li>
                    <li className="mt-2">
                      <a
                        href={certificate.url}
                        className=" hover-underline text-sm text-black"
                      >
                        <p className="hover:underline">
                          View Certificate... &rarr;
                        </p>
                      </a>
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>
        )
      })
      .reverse()
  }
  return (
    <div className="w-full max-w-5xl">
      <Heading title={'Achievements'} subtitle={'Certifications and More.'} />
      <div className="flex">
        {' '}
        <div className="mx-auto mt-12 ">{certificates}</div>
      </div>
      {/* <div className=" mt-6 flex items-center">
        <SidebarRow
          Icon={BadgeCheckIcon}
          title="Certification"
          src={Certificate} //Lock, Trophy, Briefcase
          content=""
        />
      </div>

      </div> */}
      {/* <div className="flex justify-center pt-24">
        <button
          className="shadow-xs rounded border border-gray-300 px-2 py-1 text-gray-800"
          data-splitbee-event="Toggle Achievements"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less ↑' : 'Show more ↓'}
        </button>
      </div> */}
    </div>
  )
}

export default Achievements
