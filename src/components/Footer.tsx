import React from 'react'

export default function Footer() {
  return (
    <div className="mt-32 p-4 text-center text-gray-600 dark:text-gray-100">
      © {new Date().getFullYear()} bhawkinson ·{' '}
      <a
        className="text-blue-500"
        href="https://github.com/Twonarly1/bhawkinson-twonarly1"
      >
        Source
      </a>
    </div>
  )
}
