import React from 'react'

export default function Footer() {
  return (
    <div className="mt-32 p-4 text-center">
      © {new Date().getFullYear()} bhawkinson ·{' '}
      <a
        className="text-blue-500"
        href="https://github.com/Twonarly1/bhawkinson-twonarly1"
      >
        <code>code</code>
      </a>
    </div>
  )
}
