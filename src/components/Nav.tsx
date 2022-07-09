import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="mx-auto flex w-full max-w-5xl justify-between p-5">
      <Link href="/">
        <a className="rounded-md text-gray-700">bhawkinson.eth </a>
      </Link>
      <Link href="/work">
        <a className="rounded-md text-gray-700">Projects</a>
      </Link>
    </nav>
  )
}

export default Nav
