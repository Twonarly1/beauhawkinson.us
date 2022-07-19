import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-5xl cursor-pointer justify-between py-5 pb-12 text-gray-700 dark:text-gray-100 ">
      <div className="flex gap-x-4 ">
        <Link href="/">
          <code>bhawkinson.eth</code>
        </Link>
        <ThemeSwitcher />
      </div>
      <Link href="/projects">
        <code>Projects</code>
      </Link>
    </nav>
  )
}

export default Nav
