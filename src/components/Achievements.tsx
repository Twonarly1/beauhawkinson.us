/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import TimeAgo from 'react-timeago'
import { Dialog, Transition } from '@headlessui/react'
import { FingerPrintIcon, XIcon } from '@heroicons/react/outline'
import Heading from './Heading'
import useIsMobile from '../../lib/useIsMobile'

const Achievements = ({ certificate, key }) => {
  const [showMore, setShowMore] = useState<boolean>()
  const mobile = useIsMobile()
  console.log(mobile)
  return (
    <div
      key={key}
      className="relative flex cursor-pointer items-center justify-between space-x-4 rounded-lg border border-gray-300 p-2 px-6 hover:border-gray-400 hover:shadow-md"
    >
      <Image
        src={certificate.src}
        alt={certificate.name}
        height={100}
        width={100}
        quality={100}
      />
      <div className="text-left ">
        <p className="w-auto text-gray-900 hover:opacity-0 dark:text-gray-200 sm:w-80">
          {certificate.name}
        </p>
        <TimeAgo
          date={certificate.date}
          className=" text-xs text-gray-500 hover:opacity-0"
        />
      </div>
      {mobile == true && <FingerPrintIcon className="h-6 w-6" />}
      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white text-xs font-semibold text-black opacity-0 duration-300 ease-in-out hover:opacity-100">
        {certificate.description}
      </div>
    </div>
  )
}

export default Achievements
