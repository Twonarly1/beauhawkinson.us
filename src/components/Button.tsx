import React, { SVGProps } from 'react'

type Props = {
  className?: string
  children?: any
  onClick?: () => {}
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export default function Button({ children, className, onClick, Icon }: Props) {
  return (
    <div
      className={`z-10 cursor-pointer rounded-full border border-gray-300 bg-gray-50 p-1 hover:border-gray-400 hover:shadow-md dark:border-gray-400 dark:bg-slate-800 dark:hover:border-gray-300 dark:hover:shadow-sm dark:hover:shadow-white ${className}`}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      {children}
    </div>
  )
}
