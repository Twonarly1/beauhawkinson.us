import React, { useEffect, useState } from "react"
import Heading from "../../Heading"
import { PageInfo } from "../../../../typings"
import { urlFor } from "../../../../sanity"
import Link from "next/link"
import BkgCircles from "./BkgCircles"
import { useTheme } from "next-themes"
import HeroImage from "./HeroImage"

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
                <div className="rounded-bl-4xl relative  pt-40  sm:h-36 md:h-60 ">
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
                <div className="rounded-bl-4xl relative   pt-40  sm:h-36 md:h-60 ">
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
        <div className="bg-black/5 dark:bg-white/10">
            <div className="    mega:h-[750px]">
                <BkgCircles />
                {/* <div className="relative mx-auto w-full max-w-sm">
                    <div className="blobAnimation  -left-4 bg-purple-300 dark:bg-purple-200"></div>
                    <div className="animation-delay-2000 blobAnimation -right-4 bg-yellow-300 dark:bg-yellow-200"></div>
                    <div className="animation-delay-4000 blobAnimation left-20 bg-pink-300 dark:bg-red-200"></div> */}
                <HeroImage heroImage={pageInfo?.heroImage} />
                <Heading title={pageInfo?.name} subtitle={pageInfo?.role} />
                <div className=" -mt-6 mb-32 flex flex-col items-center justify-center gap-2 p-2 md:gap-4 2xs:flex-row">
                    {NavItems.map((item, i: number) => (
                        <Link key={i} href={item.href}>
                            <button className="z-10 px-2 text-xs uppercase tracking-widest text-gray-400 underline transition-all hover:text-pink-200 dark:text-gray-200 dark:hover:text-pink-200">
                                {item.title}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className=""> {switchSvgFillOnTheme()}</div>
        </div>
    )
}

export default About
