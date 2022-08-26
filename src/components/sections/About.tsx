import Image from "next/image"
import React from "react"
import hoverImage from "../../../public/images/profileImages/pfp.jpeg"
import pfp from "../../../public/images/profileImages/profilepic.jpg"
import Heading from "../Heading"

export default function About() {
    return (
        <div className="mx-auto bg-black/5 px-6 pb-32 dark:bg-white/10">
            <div className="flex items-center justify-center gap-x-16 py-16 ">
                <div className="group h-[127px] w-[127px] cursor-pointer bg-transparent perspective">
                    <div className="relative h-full w-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                        <div className="absolute h-[127px] w-[127px] rounded-full backface-hidden">
                            <Image
                                priority
                                className="rounded-full"
                                src={pfp}
                                alt="Portrait photo of me"
                                objectFit="cover"
                                layout="fill"
                                quality={100}
                            />
                        </div>
                        <div className="absolute h-[127px] w-[127px] my-rotate-y-180 backface-hidden ">
                            <Image
                                loading="lazy"
                                className="rounded-full"
                                src={hoverImage}
                                alt="Portrait photo of me"
                                quality={100}
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-center">
                <Heading
                    title={"Hey, I'm Beau!"}
                    subtitle={"I contribute and develop in the Web3 space."}
                />
                <div className="space-x-3 pt-6">
                    <a
                        className="rounded bg-blue-200 p-1 px-2 text-blue-800 hover:bg-blue-300"
                        data-splitbee-event="Open Twitter"
                        href="https://twitter.com/twonarly"
                    >
                        Twitter
                    </a>
                    <a
                        className="rounded bg-gray-300 p-1 px-2 text-gray-800 hover:bg-gray-400"
                        data-splitbee-event="Open GitHub"
                        href="https://github.com/Twonarly1"
                    >
                        GitHub
                    </a>
                    <a
                        className="rounded bg-purple-200 p-1 px-2 text-purple-800 hover:bg-purple-300"
                        data-splitbee-event="Open LinkedIn"
                        href={"/7.17-resume.pdf"}
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )
}
