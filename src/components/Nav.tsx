import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="mx-auto mb-4 flex w-full max-w-5xl items-center justify-between pt-4">
      <Link href="/">
        <a className="ml-2 rounded-md px-2 py-1">bhawkinson.eth </a>
      </Link>
      <ul className="flex">
        <li>
          <Link href="/work">
            <a className="mr-2 rounded-md px-2 py-1 text-gray-700">Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
