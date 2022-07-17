import React from 'react'

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
  var randomColor = generateRandomColor()
  console.log(randomColor)
  return (
    <>
      <h1 className="cursor-default text-4xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <div className="mt-1 cursor-default text-2xl text-gray-500 dark:text-gray-400">
        {subtitle}
      </div>
      <p className="text-xs text-pink-400">{legend}</p>
    </>
  )
}

export default Heading
