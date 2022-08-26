import { SparklesIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Dot, Tab } from "../../../typings"
import getRandomInt from "../../lib/getRandomInt"
import useWindowDimensions from "../../lib/useWindowDimensions"
import { capitalizeFirstLetter } from "../../lib/utils"
import { ThemeSwitcher } from "../ThemeSwitcher"

const navigations: Tab[] = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
]

const Nav = () => {
    const router = useRouter()
    const [dotData, setDotData] = useState<Dot[]>()
    const { height, width } = useWindowDimensions()
    const [activeTab, setActiveTab] = useState<string>("")

    const generatedotData = () => {
        let circles: any = []
        var protection = 0
        let h: any = height
        let w: any = width
        let count = parseInt(`${Number((h + w) / 75)}`)
        while (circles.length < count) {
            // for (let i = 0; i < 25; i++) {
            let h: any = height
            let w: any = width
            const circle = {
                x: getRandomInt(10, w - 110),
                y: getRandomInt(10, h - 110),
                r: getRandomInt(6, 36),
                rgb: {
                    r: getRandomInt(100, 255),
                    g: getRandomInt(100, 255),
                    b: getRandomInt(100, 255),
                },
            }
            let overlapping = false
            for (let j = 0; j < circles.length; j++) {
                let other = circles[j]
                let d = Math.sqrt(
                    Math.pow(circle.x + circle.r - (other.x + other.r), 2) +
                        Math.pow(circle.y + circle.r - (other.y + other.r), 2)
                )
                if (d < circle.r + other.r) {
                    overlapping = true
                }
            }
            if (!overlapping) {
                circles.push(circle)
            }
            protection++
            if (protection > 50000) {
                break
            }
        }
        setDotData(circles)
    }

    const handleClick = (tabName: string) => {
        if (tabName == "home") {
            router.push("/")
        } else {
            router.push(`/${tabName}`)
        }
    }

    useEffect(() => {
        if (router.pathname == "/") setActiveTab("home")
        else {
            setActiveTab(router.pathname.substring(1))
        }
    }, [router.pathname])

    return (
        <nav className="offColorHeading sticky top-0 z-50 flex justify-between bg-black/5 px-6 py-5 pb-5 backdrop-blur-md dark:bg-white/10">
            <div className="mx-auto flex w-full max-w-5xl justify-between gap-4">
                <div className="flex gap-4">
                    {navigations.map((tab: Tab, index: number) => (
                        <a
                            key={index}
                            href={tab.path}
                            onClick={() => handleClick(tab.name || tab.path)}
                            className={`commonBordering cursor-pointer rounded-md px-3 py-2 text-sm font-medium dark:bg-slate-800 ${
                                tab.name == activeTab
                                    ? "text-pink-400 dark:text-pink-200"
                                    : "offColorHeading"
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                {capitalizeFirstLetter(tab.name)}
                            </div>
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <SparklesIcon
                        onClick={() => generatedotData()}
                        className="commonBordering navButton dark:bg-slate-800"
                    />
                </div>
            </div>

            <div className="">
                {dotData?.map((dot: any) => {
                    return (
                        <div
                            className="absolute z-0 rounded-full opacity-30 mix-blend-multiply active:cursor-move"
                            draggable="true"
                            key={dot?.iD}
                            style={{
                                top: dot?.y + "px",
                                left: dot?.x + "px",
                                height: dot?.r * 2,
                                width: dot?.r * 2,
                                background:
                                    "rgb(" + dot?.rgb.r + "," + dot?.rgb.g + "," + dot?.rgb.b + ")",
                            }}
                        ></div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav
