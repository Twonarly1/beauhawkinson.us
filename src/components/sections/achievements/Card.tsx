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
        <a href={achievement.url} className="-mb-2 rounded-lg p-2">
            <div className="relative mx-auto h-32 w-32 items-center">
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
