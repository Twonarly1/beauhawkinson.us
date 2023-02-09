"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Moon, Sun } from "core/icon"

export function SlideoverThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const renderLightTheme = () => {
        if (currentTheme === "light") {
            return
        } else {
            return setTheme("light")
        }
    }

    const renderDarkTheme = () => {
        if (currentTheme === "dark") {
            return
        } else {
            return setTheme("dark")
        }
    }

    const currentTheme = theme === "system" ? systemTheme : theme
    return (
        <div className=" flex w-full flex-col justify-start space-y-1 text-left">
            <button
                onClick={renderLightTheme}
                className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
            >
                <Sun className="h-[38px] w-[38px] rounded-full p-2 " />

                <p>Light</p>
            </button>

            <button
                onClick={renderDarkTheme}
                className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
            >
                <Moon className="h-[38px] w-[38px] rounded-full p-2" />

                <p>Dark</p>
            </button>
        </div>
    )
}
