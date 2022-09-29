import { Fragment, useEffect, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import { useTheme } from "next-themes"
import useWindowSize from "../../lib/hooks/useWindowDimensions"
import getRandomInt from "../../lib/utils"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}
type Size = {
    width: number | undefined
    height: number | undefined
}

type Dot = {
    rgb: {
        r: number
        g: number
        b: number
    }
    x: number
    y: number
    r: number
}

export default function Dropdown() {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)
    const [dotData, setDotData] = useState<Dot[]>()
    const size: Size = useWindowSize()
    const [isDotTheme, setIsDotTheme] = useState<boolean>(false)

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme

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

    const generatedotData = () => {
        let circles: Dot[] = []
        var protection = 0
        let h: any = size.height
        let w: any = size.width

        let count = parseInt(`${(h + w) / 75}`)

        while (circles.length < count) {
            const circle = {
                x: getRandomInt(10, w),
                y: getRandomInt(100, h),
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

    const handleDotTheme = () => {
        if (isDotTheme) {
            setIsDotTheme(false)
            setDotData([])
        } else {
            setIsDotTheme(true)
            generatedotData()
        }
    }

    return (
        <div>
            <Menu
                as="div"
                className="relative inline-block rounded-lg bg-white text-left dark:bg-black/5"
            >
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700  hover:bg-white dark:bg-black/5 dark:text-gray-100 dark:hover:bg-primary-dark">
                    <p className="dark:group-hover:text-pink-100"> Theme</p>
                    <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5 dark:group-hover:text-pink-100"
                        aria-hidden="true"
                    />
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-gray-600 dark:bg-primary-dark dark:ring-gray-200">
                        <div className="">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={renderLightTheme}
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                : "text-gray-700 ",
                                            "group flex w-full items-center space-x-4 rounded-t-md px-4 py-2 text-sm dark:text-white"
                                        )}
                                    >
                                        <SunIcon className=" navButton group-hover:animate-wiggle " />
                                        <p>Light Mode</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={renderDarkTheme}
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                : "text-gray-700 ",
                                            "group flex w-full items-center space-x-4 px-4 py-2 text-sm dark:text-white"
                                        )}
                                    >
                                        <MoonIcon className=" navButton  group-hover:animate-wiggle" />
                                        <p>Dark Mode</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleDotTheme}
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-pink-100"
                                                : "text-gray-700 ",
                                            "group flex w-full space-x-4 rounded-b-md px-4 py-2 text-sm dark:text-white"
                                        )}
                                    >
                                        <input
                                            id="comments"
                                            aria-describedby="comments-description"
                                            name="comments"
                                            checked={isDotTheme}
                                            onChange={(e) => setIsDotTheme(e.target.checked)}
                                            type="checkbox"
                                            className="h-5 w-5 rounded border border-gray-300 bg-white text-pink-100  group-hover:border-black dark:group-hover:bg-pink-100 "
                                        />
                                        <p className="">Dots</p>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            {dotData?.map((dot: any, i: number) => {
                return (
                    <div
                        className="absolute -z-50 h-full rounded-full opacity-5 mix-blend-multiply active:cursor-move"
                        draggable="true"
                        key={i}
                        style={{
                            top: dot.y + "px",
                            left: dot.x + "px",
                            height: dot.r * 2,
                            width: dot.r * 2,
                            background:
                                "rgb(" + dot.rgb.r + "," + dot.rgb.g + "," + dot.rgb.b + ")",
                        }}
                    ></div>
                )
            })}
        </div>
    )
}
