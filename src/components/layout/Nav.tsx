import { SparklesIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Dot, Tab } from '../../../typings'
import getRandomInt from '../../lib/getRandomInt'
import useWindowDimensions from '../../lib/useWindowDimensions'
import { capitalizeFirstLetter } from '../../lib/utils'
import DotsLayout from '../DotsLayout'
import { ThemeSwitcher } from '../ThemeSwitcher'

const navigations: Tab[] = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
]

const Nav = () => {
  const router = useRouter()
  const [dotDATA, setDotDATA] = useState<Dot[]>()
  const { height, width } = useWindowDimensions()
  const [activeTab, setActiveTab] = useState<string>('')

  function generateDotData() {
    let dotData = []
    let h: any = height
    let w: any = width
    let count = parseInt(`${Number((h + w) / 75)}`)
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
      dot.top = getRandomInt(10, h - 110)
      dot.left = getRandomInt(10, w - 110)
      dotData.push(dot)
    }
    setDotDATA(dotData)
    return dotData
  }

  const handleClick = (tabName: string) => {
    if (tabName == 'home') {
      router.push('/')
    } else {
      router.push(`/${tabName}`)
    }
  }

  useEffect(() => {
    if (router.pathname == '/') setActiveTab('home')
    else {
      setActiveTab(router.pathname.substring(1))
    }
  }, [router.pathname])

  return (
    <nav className="offColorHeading sticky top-0 z-50 flex justify-between bg-black/5 px-6 py-5 pb-5 backdrop-blur-md dark:bg-white/10">
      <div className="mx-auto flex w-full max-w-5xl justify-between gap-4">
        <div className="flex gap-4">
          {navigations.map((tab: Tab, index: number) => (
            <a
              key={index}
              href={tab.path}
              onClick={() => handleClick(tab.name || tab.path)}
              className={`commonBordering cursor-pointer rounded-md px-3 py-2 text-sm font-medium dark:bg-slate-800 ${
                tab.name == activeTab
                  ? 'text-pink-400 dark:text-pink-200'
                  : 'offColorHeading'
              }`}
            >
              <div className="flex items-center space-x-2">
                {capitalizeFirstLetter(tab.name)}
              </div>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <SparklesIcon
            onClick={() => generateDotData()}
            className="commonBordering navButton dark:bg-slate-800"
          />
        </div>
      </div>

      {dotDATA &&
        dotDATA.map((dot: Dot, index: number) => (
          <DotsLayout dot={dot} key={index} />
        ))}
    </nav>
  )
}

export default Nav
