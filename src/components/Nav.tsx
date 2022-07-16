import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-5xl justify-between py-5">
      <div className="flex space-x-4">
        <Link href="/">
          <a className="rounded-md text-gray-700 dark:text-white">
            bhawkinson.eth{' '}
          </a>
        </Link>
        <ThemeSwitcher />
      </div>
      <Link href="/projects">
        <a className="rounded-md text-gray-700 dark:text-white">Projects</a>
      </Link>
    </nav>
  )
}

export default Nav
