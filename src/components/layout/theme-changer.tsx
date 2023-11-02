"use client"

import { Expand } from "@theme-toggles/react"
import { useTheme } from "next-themes"
import { useIsClient } from "usehooks-ts"

import "@theme-toggles/react/css/Expand.css"

/**
 * Theme-changer component.
 */
const ThemeChanger = () => {
    const isClient = useIsClient()
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => (theme === "dark" ? setTheme("light") : setTheme("dark"))

    if (!isClient) return null

    return (
        <Expand
            onToggle={toggleTheme}
            toggled={theme === "light"}
            className=" transition-colors duration-300 hover:text-pink-500"
        />
    )
}

export default ThemeChanger
