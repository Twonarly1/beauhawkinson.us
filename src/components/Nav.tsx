import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

const Nav = () => {
  return (
    <nav className="mx-auto flex w-full max-w-5xl  justify-between p-5">
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
