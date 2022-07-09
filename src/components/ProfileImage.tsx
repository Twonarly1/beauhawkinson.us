import Image from 'next/image'

export const ProfileImage: React.FC<{
  size?: number
}> = ({ size = 128 }) => (
  <div className="flex flex-col items-center pt-12 pb-4">
    <Image
      className="rounded-full"
      src={'/images/profilepic.jpg'}
      alt="Portrait photo of me"
      height={size}
      quality={100}
      width={size}
    />
  </div>
)
