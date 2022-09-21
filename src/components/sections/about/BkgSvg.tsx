import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

const BkgSvg = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => setMounted(true), [])

    return mounted && currentTheme === "light" ? (
        <div className="rounded-bl-4xl relative h-20 bg-gray-100 dark:bg-white/10 sm:h-36 md:h-60 ">
            <svg
                className="absolute bottom-0 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    ) : (
        <div className="rounded-bl-4xl relative h-20 bg-gray-100 dark:bg-white/10 sm:h-36 md:h-60 ">
            <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#272727"
                    fillOpacity="1"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    )
}

export default BkgSvg
