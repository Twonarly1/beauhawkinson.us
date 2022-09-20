import MoonIcon from "@heroicons/react/24/solid/MoonIcon"
import SunIcon from "@heroicons/react/24/solid/SunIcon"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const renderThemeChanger = () => {
        if (!mounted) return null
        const currentTheme = theme === "system" ? systemTheme : theme
        if (currentTheme === "dark") {
            return (
                <SunIcon
                    onClick={async () => setTheme("light")}
                    className="commonBordering navButton hover:animate-wiggle dark:bg-slate-800"
                />
            )
        } else {
            return (
                <MoonIcon
                    onClick={async () => setTheme("dark")}
                    className="commonBordering navButton hover:animate-wiggle dark:bg-slate-800"
                />
            )
        }
    }

    return <> {renderThemeChanger()}</>
}
