import Image from "next/image"
import React from "react"
import Heading from "../../Heading"
import { PageInfo } from "../../../../typings"
import { urlFor } from "../../../../sanity"
import Link from "next/link"
import BkgCircles from "./BkgCircles"
import BkgSvg from "./BkgSvg"

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
            <BkgSvg />
        </div>
    )
}

export default About
