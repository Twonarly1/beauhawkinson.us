import { Fragment, useEffect, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import { useTheme } from "next-themes"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export default function Slideover() {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

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

    return (
        <div className="z-0">
            <Menu
                as="div"
                className="relative z-50 inline-block rounded-lg bg-white text-left dark:bg-black/5"
            >
                <Menu.Button className="group inline-flex w-full justify-center rounded-md  px-2 py-2 text-sm font-medium text-gray-700 ring-2 ring-gray-300 hover:bg-white  dark:bg-black/5 dark:text-gray-100 dark:hover:bg-primary-dark">
                    <p className=""> Theme</p>
                    <ChevronDownIcon className=" ml-2 h-5 w-5" aria-hidden="true" />
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
                    <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white ring-2 ring-gray-300  dark:bg-primary-dark ">
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
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
