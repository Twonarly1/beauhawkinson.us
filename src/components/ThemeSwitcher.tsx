import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="mt-[1px] h-5 w-5 items-center "
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <SunIcon className="text-gray-100" />
      ) : (
        <MoonIcon className="text-gray-700" />
      )}
    </button>
  )
}
