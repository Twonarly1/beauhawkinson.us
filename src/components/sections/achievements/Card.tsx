import React from "react"
import { urlFor } from "../../../../sanity"
import { Achievement } from "../../../../typings"
import Image from "next/image"
import TimeAgo from "react-timeago"

type Props = {
    achievement: Achievement
}

const Card = ({ achievement }: Props) => {
    return (
        <a
            href={achievement.url}
            className="group relative mx-auto h-fit w-60 cursor-pointer items-center justify-between rounded-2xl border-2 border-gray-100  bg-white transition duration-300 hover:bg-gray-50 dark:border-gray-600  dark:bg-slate-800 dark:hover:bg-slate-600 xs:w-80 "
        >
            <div className="relative mx-auto -mt-14 h-32 w-32 items-center">
                <Image
                    src={urlFor(achievement?.image).url()}
                    alt={achievement?.title}
                    quality={100}
                    layout="fill"
                    objectFit="contain"
                    className="flex-shrink-0 grow-0"
                />
            </div>

            <p className="mt-2 text-center text-xl font-semibold tracking-wide text-gray-900 dark:text-gray-100 ">
                {achievement?.title}
            </p>

            <p className=" -mt-2 items-center  justify-center rounded-2xl border-none  p-6 text-center text-[14px] text-gray-400   dark:text-gray-100  ">
                {achievement?.summary}
            </p>
        </a>
    )
}

export default Card
