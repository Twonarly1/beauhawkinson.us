import Image from "next/image"
import React, { useEffect, useState } from "react"
import Heading from "../../Heading"
import { PageInfo } from "../../../../typings"
import { urlFor } from "../../../../sanity"
import Link from "next/link"
import BkgCircles from "./BkgCircles"
import { useTheme } from "next-themes"

type Props = {
    pageInfo: PageInfo
}

const NavItems = [
    { href: "#projects", title: "Projects" },
    { href: "#skills", title: "Technologies" },
    { href: "#achievements", title: "Achievements" },
    { href: "#contact", title: "Contact" },
]

const About = ({ pageInfo }: Props) => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [mounted, setMounted] = useState<boolean>(false)
    useEffect(() => setMounted(true), [])

    const switchSvgFillOnTheme = () => {
        if (!mounted) return null
        if (currentTheme === "light") {
            return (
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
            )
        }
        if (currentTheme === "dark") {
            return (
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
    }
    return (
        <div className="h-screen">
            <BkgCircles />
            <div className="mx-auto bg-black/5 px-6 pt-32 pb-12 dark:bg-white/10 mega:h-[750px]">
                <div className=" flex items-center justify-center gap-x-16 ">
                    {/* ToDo: Flickering is happening here on scroll snap */}
                    <div className="group h-[254px] w-[254px] cursor-pointer bg-transparent perspective">
                        <div className="relative h-full w-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                            <div className="absolute mt-6  rounded-full backface-hidden">
                                <Image
                                    priority
                                    className="rounded-full"
                                    src={urlFor(pageInfo.heroImage).url()}
                                    alt="Portrait photo of me"
                                    height={254}
                                    width={254}
                                />
                            </div>
                            <div className="absolute mt-6 rounded-full my-rotate-y-180 backface-hidden ">
                                <Image
                                    priority
                                    className="rounded-full"
                                    src={urlFor(pageInfo.profilePic).url()}
                                    alt="Portrait photo of me"
                                    height={254}
                                    width={254}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-12 text-center ">
                    <Heading title={pageInfo?.name} subtitle={pageInfo?.role} />
                    <div className=" mt-2 flex flex-col items-center justify-center gap-2 p-2 md:gap-4 2xs:flex-row">
                        {NavItems.map((item, i: number) => (
                            <Link key={i} href={item.href}>
                                <button className="heroButton z-10">{item.title}</button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {switchSvgFillOnTheme()}
        </div>
    )
}

export default About
