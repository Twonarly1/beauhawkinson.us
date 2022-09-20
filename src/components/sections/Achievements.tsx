import Image from "next/image"
import React from "react"
import TimeAgo from "react-timeago"
import { Achievement } from "../../../typings"
import useIsMobile from "../../lib/hooks/useIsMobile"
import Heading from "../Heading"
import { urlFor } from "../../../sanity"
import FingerPrintIcon from "@heroicons/react/24/solid/FingerPrintIcon"

type Props = {
    achievements: Achievement[]
}

const Achievements = ({ achievements }: Props) => {
    const mobile = useIsMobile()

    return (
        <div className="relative mx-auto flex h-screen  w-full  flex-col items-center justify-start px-6 pt-32">
            <Heading title={"Achievements"} subtitle={"Certifications and More."} />
            <div className="z-10 mx-auto mt-12 grid w-fit grid-cols-1 gap-y-4">
                {achievements.map((item, index: number) => (
                    <div
                        key={index}
                        className="commonBordering duration-600 fade-up relative flex cursor-pointer items-center justify-between p-2 px-6 transition  dark:bg-slate-800 "
                    >
                        <div className="flex items-center">
                            <Image
                                src={urlFor(item?.image).url()}
                                alt={item?.title}
                                height={100}
                                width={100}
                                quality={100}
                            />
                            <div className="ml-4 text-left">
                                <p className="w-auto text-gray-900 hover:opacity-0 dark:text-gray-100 sm:w-80 xs:w-60">
                                    {item?.title}
                                </p>
                                <TimeAgo
                                    date={item?.dateEarned}
                                    className="text-sm hover:opacity-0"
                                />
                            </div>
                        </div>
                        {mobile == true && <FingerPrintIcon className="h-6 w-6" />}
                        <div className="commonBordering absolute inset-0 z-10 flex items-center justify-center border-none text-center text-[10px] text-gray-900 opacity-0 hover:opacity-100 dark:bg-slate-800 dark:text-gray-100 sm:p-2 sm:text-sm">
                            {item?.summary}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-pink-200/10 dark:bg-white/10" />
        </div>
    )
}

export default Achievements
