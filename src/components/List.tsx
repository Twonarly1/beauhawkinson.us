import Image from 'next/image'
import React, { ImgHTMLAttributes, SVGProps } from 'react'

interface Props {
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  src: string | undefined
  title: string
  content: any
  onClick?: () => {}
}

const SidebarRow = ({ Icon, src, title, onClick, content }: Props) => {
  return (
    <div
      onClick={() => onClick?.()}
      className="group:hover:font-bold group mx-auto flex w-[400px] items-center justify-between rounded-full px-6 py-[2px] transition-all duration-200"
    >
      <div className="flex items-center">
        <Image src={src} height={100} width={100} />
        <p className="ml-2 text-base font-light text-gray-400 md:inline-flex lg:text-xl">
          {title}:
        </p>
      </div>
      <p className="ml-2 mt-[2px] font-light text-gray-400 group-hover:font-bold">
        {content}
      </p>
    </div>
  )
}

export default SidebarRow
