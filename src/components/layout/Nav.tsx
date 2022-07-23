import { SparklesIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { useState } from 'react'
import { Dot } from '../../../typings'
import useWindowDimensions from '../../lib/useWindowDimensions'
import Button from '../Button'
import DotsLayout from '../DotsLayout'
import { ThemeSwitcher } from '../ThemeSwitcher'

const Nav = () => {
  const [dotDATA, setDotDATA] = useState<Dot[]>()
  const { height, width } = useWindowDimensions()
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function generateDotData() {
    let dotData = []
    let count: number = parseInt(`${Number((height + width) / 75)}`)
    for (let i = 0; i < count; i++) {
      //@ts-ignore
      const dot: Dot = {}
      dot.iD = i
      dot.diameter = getRandomInt(20, 100)
      dot.rgb = {
        r: getRandomInt(100, 255),
        g: getRandomInt(100, 255),
        b: getRandomInt(100, 255),
      }
      dot.top = getRandomInt(10, height - 110)
      dot.left = getRandomInt(10, width - 110)
      dotData.push(dot)
    }
    setDotDATA(dotData)
    return dotData
  }

  const navigations = [
    { label: 'bhawkinson.eth', path: '/' },
    { label: 'projects', path: '/projects' },
  ]

  return (
    <nav className=" flex max-w-5xl justify-between px-6 py-5 pb-12 text-gray-700 dark:text-gray-400 ">
      <div className="flex gap-4">
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
        dotDATA.map((dot: any, index: number) => (
          <DotsLayout dot={dot} key={index} />
        ))}
    </nav>
  )
}

export default Nav
