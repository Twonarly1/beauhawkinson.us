import React from 'react'

export default function Footer() {
  return (
    <div className="mt-8 p-4 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Beau Hawkinson ·{' '}
      <a className="text-blue-500" href="https://github.com/Twonarly1">
        Source
      </a>
    </div>
  )
}