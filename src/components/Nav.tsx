import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-5xl justify-between py-5 pb-12 ">
      <div className="flex gap-x-4 text-gray-700 dark:text-gray-100">
        <Link href="/">bhawkinson.eth</Link>
        <ThemeSwitcher />
      </div>
      <Link href="/projects">Projects</Link>
    </nav>
  )
}

export default Nav
