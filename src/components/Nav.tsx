import React, { useEffect, useState } from "react"
import { Social } from "../../typings"
import getRandomInt from "../lib/utils"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { SocialIcon } from "react-social-icons"
import Link from "next/link"
import { SparklesIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"
import useWindowSize from "../lib/hooks/useWindowDimensions"

type Props = {
    socials: Social[]
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

const Nav = ({ socials }: Props) => {
    const [dotData, setDotData] = useState<Dot[]>()
    const size: Size = useWindowSize()

    const generatedotData = () => {
        let circles: Dot[] = []
        var protection = 0
        let h: any = size.height
        let w: any = size.width

        let count = parseInt(`${(h + w) / 75}`)

        while (circles.length < count) {
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

    useEffect(() => {
        setTimeout(() => {
            setDotData([])
            toast.custom(
                (t) => (
                    <div
                        className={`${
                            t.visible ? "animate-enter" : "animate-leave"
                        } pointer-events-auto mr-2 -mt-2 flex max-w-4xl rounded-lg border-[4px] border-pink-400 bg-white px-4 py-2 shadow-lg `}
                    >
                        {/* ToDo: create toggle */}
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="flex items-center gap-4"
                        >
                            Click the sparkles Icon for dots!!
                            <SparklesIcon className=" navButton  text-black hover:animate-wiggle dark:text-gray-400" />
                        </button>
                    </div>
                ),
                { duration: 4000 }
            )
        }, 5000)
    }, [])

    return (
        <nav className="offColorHeading sticky top-0 z-50  flex justify-between bg-black/5 px-6 py-5 pb-5 backdrop-blur-md dark:bg-white/10">
            <div className="mx-auto flex w-full max-w-5xl justify-between gap-4">
                <div className="z-10 flex items-center gap-4">
                    {socials.map((social, i: number) => (
                        <SocialIcon
                            style={{ width: "28px", height: "28px" }}
                            key={i}
                            url={social.url}
                            className=" rounded-full hover:scale-90"
                        />
                    ))}
                    <Link href="#contact">
                        <div className="flex items-center gap-3">
                            <SocialIcon
                                style={{ width: "28px", height: "28px" }}
                                className="cursor-pointer rounded-full hover:scale-90"
                                network="email"
                            />
                            <p className="hidden cursor-pointer font-winner  font-bold tracking-wide text-gray-900 hover:underline dark:font-thin dark:text-gray-100 xs:inline-flex">
                                Get In Touch...
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="z-10 flex items-center gap-3">
                    <ThemeSwitcher />
                    <SparklesIcon
                        onClick={() => generatedotData()}
                        className=" navButton  text-black hover:animate-wiggle dark:text-gray-400"
                    />
                </div>
            </div>

            <div className="">
                {dotData?.map((dot: any, i: number) => {
                    return (
                        <div
                            className="absolute  rounded-full opacity-10 mix-blend-multiply active:cursor-move"
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
        </nav>
    )
}

export default Nav
