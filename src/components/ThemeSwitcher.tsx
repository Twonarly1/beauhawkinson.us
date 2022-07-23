import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import Button from './Button'

export const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return (
        <Button Icon={SunIcon} onClick={async () => setTheme('light')}></Button>
      )
    } else {
      return (
        <Button Icon={MoonIcon} onClick={async () => setTheme('dark')}></Button>
      )
    }
  }

  return <> {renderThemeChanger()}</>
}
