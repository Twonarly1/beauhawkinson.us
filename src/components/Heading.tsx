import React, { useEffect, useState } from 'react'

interface Props {
  title?: string
  subtitle?: any
  legend?: string
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const Heading = ({ title, subtitle, legend }: Props) => {
  const [color, setColor] = useState('')
  var randomColor = generateRandomColor()
  console.log(randomColor)

  useEffect(() => {
    var randomColor = generateRandomColor()
    setColor(randomColor), []
  }, [])

  return (
    <div className=" mx-auto max-w-5xl">
      <h1 className="cursor-default text-4xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <div className="mt-1 cursor-default text-2xl text-gray-500 dark:text-gray-400">
        {subtitle}
      </div>
      <p className="text-xs text-pink-400">{legend}</p>
    </div>
  )
}

export default Heading
