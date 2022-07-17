import Image from 'next/image'
import hoverImage from '../../public/images/profileImages/pfp.jpeg'
import pfp from '../../public/images/profileImages/profilepic.jpg'

export const ProfileImage: React.FC<{
  size?: number
}> = ({ size = 128 }) => (
  <div className="mx-auto w-[128px] rounded-full pt-16 pb-8">
    <div className="relative flex justify-center rounded-full border-2 border-gray-300 p-1">
      <Image
        className="rounded-full"
        src={pfp}
        alt="Portrait photo of me"
        width={size}
        height={size}
        quality={100}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-6xl font-semibold text-white opacity-0 duration-300 ease-in-out hover:opacity-100">
        <Image
          className="rounded-full"
          src={hoverImage}
          alt="Portrait photo of me"
          quality={100}
          width={size}
          height={size}
        />
      </div>
    </div>
  </div>
)
