/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { ProfileImage } from '../components/ProfileImage'
import Image from 'next/image'
import hoverImage from '../../public/images/portfolio/pfp.jpeg'
import pfp from '../../public/images/profilepic.jpg'

function Test() {
  return (
    <>
      <div className="relative h-64 w-64 rounded-full bg-red-100">
        <Image
          className="rounded-full"
          src={pfp}
          alt="Portrait photo of me"
          quality={100}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-6xl font-semibold text-white opacity-0 duration-300 hover:opacity-100">
          <Image
            className="rounded-full"
            src={hoverImage}
            objectFit="cover"
            alt="Portrait photo of me"
            quality={100}
          />
        </div>
      </div>
    </>
  )
}

export default Test
