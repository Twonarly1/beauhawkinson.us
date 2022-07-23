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
      className={`commonBordering z-10 cursor-pointer rounded-full p-1 dark:bg-slate-800  ${className}`}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      {children}
    </div>
  )
}
