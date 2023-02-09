"use client"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { CoreTooltip, Heading, Stack } from "~/core"
import { Code, GitHubIcon, Info, LinkedInIcon, Moon, Sun, TwitterIcon } from "~/core/icon"

export function About() {
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
        <section id="about">
            <Stack alignItems="center" gap={8}>
                <Image
                    priority
                    className="mx-auto mt-10 flex h-[254px] w-[254px] rounded-full bg-gray-100 px-1 py-1"
                    src="/bhawkinson.jpeg"
                    alt="Portrait photo of me"
                    height={254}
                    width={254}
                    quality={100}
                />

                <Stack gap={4} alignItems="center">
                    <Stack alignItems="center">
                        <Heading as="h1">Beau Hawkinson</Heading>

                        <Heading as="h2">Full Stack Developer</Heading>
                    </Stack>

                    <Stack direction="horizontal" gap={2}>
                        <CoreTooltip content="Twitter">
                            <a href="https://twitter.com/twonarly">
                                <TwitterIcon className=" h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                            </a>
                        </CoreTooltip>

                        <CoreTooltip content="GitHub">
                            <a href="https://github.com/Twonarly1">
                                <GitHubIcon className=" h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                            </a>
                        </CoreTooltip>

                        <CoreTooltip content="LinkedIn">
                            <a href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/">
                                <LinkedInIcon className=" h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                            </a>
                        </CoreTooltip>

                        <CoreTooltip content="Projects">
                            <Link href="/projects">
                                <Code className=" h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                            </Link>
                        </CoreTooltip>

                        <CoreTooltip content="Resume">
                            <Link href="/resume">
                                <Info className=" h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                            </Link>
                        </CoreTooltip>

                        <CoreTooltip content="Light">
                            <button onClick={renderLightTheme}>
                                <Sun className=" h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                            </button>
                        </CoreTooltip>

                        <CoreTooltip content="Dark">
                            <button onClick={renderDarkTheme}>
                                <Moon className=" h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                            </button>
                        </CoreTooltip>
                    </Stack>
                </Stack>
            </Stack>
        </section>
    )
}
