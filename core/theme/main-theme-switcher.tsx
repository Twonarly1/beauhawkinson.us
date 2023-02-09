"use client"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

import { Moon, Sun } from "core/icon"
import { CoreTooltip } from "core/tooltip"

export function MainviewThemeSwitcher() {
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
        <>
            <CoreTooltip content="Light">
                <button onClick={renderLightTheme}>
                    <Sun className="h-8 w-8 hover:scale-110" />
                </button>
            </CoreTooltip>

            <CoreTooltip content="Dark">
                <button onClick={renderDarkTheme}>
                    <Moon className="h-8 w-8 hover:scale-110" />
                </button>
            </CoreTooltip>
        </>
    )
}
