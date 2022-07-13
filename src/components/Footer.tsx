import React from 'react'

export default function Footer() {
  return (
    <div className="mt-8 p-4 text-center text-sm text-gray-600 dark:text-white">
      © {new Date().getFullYear()} bhawkinson ·{' '}
      <a className="text-blue-500" href="https://github.com/Twonarly1">
        Source
      </a>
    </div>
  )
}
