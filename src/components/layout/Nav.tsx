import { QuestionMarkCircleIcon, SparklesIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { useState } from 'react'
import useWindowDimensions from '../../lib/useWindowDimensions'
import Button from '../Button'
import DotsLayout from '../DotsLayout'
import { ThemeSwitcher } from '../ThemeSwitcher'

const Nav = () => {
  const [dotDATA, setDotDATA] = useState()
  const { height, width } = useWindowDimensions()
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function generateDotData() {
    var h = height
    var w = width
    var dotData = []
    //@ts-ignore
    var count = parseInt((height + width) / 75)
    for (var i = 0; i < count; i++) {
      var dot = {}
      //@ts-ignore
      dot.iD = i
      //@ts-ignore
      dot.diameter = getRandomInt(20, 100)
      //@ts-ignore
      dot.rgb = {
        r: getRandomInt(100, 255),
        g: getRandomInt(100, 255),
        b: getRandomInt(100, 255),
      }
      //@ts-ignore
      dot.top = getRandomInt(10, h - 110)
      //@ts-ignore
      dot.left = getRandomInt(10, w - 110)
      dotData.push(dot)
    }
    //@ts-ignore
    setDotDATA(dotData)
    return dotData
  }

  const navigations = [
    { label: 'bhawkinson.eth', path: '/' },
    { label: 'projects', path: '/projects' },
  ]

  return (
    <nav className=" flex max-w-5xl justify-between px-6 py-5 pb-12 text-gray-700 dark:text-gray-400 ">
      <div className="flex gap-10">
        {navigations.map((nav, index) => (
          <Link key={index} href={nav.path}>
            <code className=" cursor-pointer">{nav.label}</code>
          </Link>
        ))}
      </div>
      <div className="flex gap-x-4">
        <ThemeSwitcher />
        <Button Icon={SparklesIcon} onClick={() => generateDotData()}></Button>
      </div>
      {dotDATA &&
        //@ts-ignore
        dotDATA.map((dot: any, index: number) => (
          <DotsLayout dot={dot} key={index} />
        ))}
    </nav>
  )
}

export default Nav
