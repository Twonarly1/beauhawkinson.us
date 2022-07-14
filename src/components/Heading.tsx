import React from 'react'

interface Props {
  title?: string
  subtitle?: any
  legend?: string
}

const Heading = ({ title, subtitle, legend }: Props) => {
  return (
    <>
      <h1 className="cursor-default text-4xl font-bold">{title}</h1>
      <div className="mt-2 cursor-default text-2xl text-gray-600 dark:text-white">
        {subtitle}
      </div>
      <p className="text-xs text-pink-400">{legend}</p>
    </>
  )
}

export default Heading
