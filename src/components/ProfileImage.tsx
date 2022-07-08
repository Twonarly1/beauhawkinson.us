import Image from 'next/image'

export const ProfileImage: React.FC<{
  size?: number
}> = ({ size = 128 }) => (
  <div
    className="relative rounded-full"
    style={{
      width: size,
      height: size,
      backgroundColor: '#FCC098',
    }}
  >
    <Image
      className="rounded-full"
      src={'/images/profilepic.jpg'}
      alt="Portrait photo of me"
      height={size}
      quality={85}
      width={size}
    />
    <div
      className="absolute inset-0 rounded-full"
      style={{
        boxShadow:
          'inset 0 0 0 1px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.2)',
      }}
    />
  </div>
)
