import React from 'react'

export default function Footer() {
  return (
    <div className="p-4 pt-8 text-center text-sm text-gray-600 dark:text-white">
      © {new Date().getFullYear()} bhawkinson ·{' '}
      <a className="text-blue-500" href="https://github.com/Twonarly1">
        Source
      </a>
    </div>
  )
}
