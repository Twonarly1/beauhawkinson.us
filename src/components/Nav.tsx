import React, { useEffect, useState } from "react"
import { Dot, Social } from "../../typings"
import getRandomInt from "../lib/utils"
import useWindowDimensions from "../lib/hooks/useWindowDimensions"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { SocialIcon } from "react-social-icons"
import Link from "next/link"
import { SparklesIcon } from "@heroicons/react/24/solid"
import toast from "react-hot-toast"

type Props = {
    socials: Social[]
}

const Nav = ({ socials }: Props) => {
    const [dotData, setDotData] = useState<Dot[]>()
    const { height, width } = useWindowDimensions()

    const generatedotData = () => {
        let circles: any = []
        var protection = 0
        let h: any = height
        let w: any = width
        let count = parseInt(`${Number((h + w) / 75)}`)
        while (circles.length < count) {
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

    useEffect(() => {
        generatedotData()
        setTimeout(() => {
            setDotData([])
            toast.custom(
                (t) => (
                    <div
                        className={`${
                            t.visible ? "animate-enter" : "animate-leave"
                        } pointer-events-auto mr-2 -mt-2 flex max-w-4xl rounded-lg border-[4px] border-pink-400 bg-white px-4 py-2 shadow-lg `}
                    >
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="flex items-center gap-4"
                        >
                            Click the sparkles Icon for more dots!!
                            <SparklesIcon
                                onClick={() => generatedotData()}
                                className="commonBordering navButton animate-pulse  "
                            />
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
                            className="commonBordering rounded-full"
                        />
                    ))}
                    <Link href="#contact">
                        <div className="flex items-center gap-2">
                            <SocialIcon
                                style={{ width: "28px", height: "28px" }}
                                className="commonBordering cursor-pointer rounded-full"
                                network="email"
                            />
                            <p className="hidden cursor-pointer font-winner tracking-wide hover:underline dark:font-thin xs:inline-flex">
                                Get In Touch...
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="z-10 flex items-center gap-4">
                    <ThemeSwitcher />
                    <SparklesIcon
                        onClick={() => generatedotData()}
                        className="commonBordering navButton hover:animate-wiggle dark:bg-slate-800"
                    />
                </div>
            </div>

            <div className="">
                {dotData?.map((dot: any) => {
                    return (
                        <div
                            className="absolute  rounded-full opacity-10 mix-blend-multiply active:cursor-move"
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
