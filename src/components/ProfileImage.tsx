import Image from 'next/image'
import hoverImage from '../../public/images/profileImages/pfp.jpeg'
import pfp from '../../public/images/profileImages/profilepic.jpg'

export const ProfileImage = () => {
  const size = 128
  return (
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
  )
}
