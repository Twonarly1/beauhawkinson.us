import React from "react"
import { urlFor } from "../../../../sanity"
import Image from "next/Image"
import { Skill } from "../../../../typings"

type Props = {
    individualSkill: Skill
}

const IndividualSkill = ({ individualSkill }: Props) => {
    return (
        <div
            className={`commonBordering  group relative mx-auto p-4 dark:bg-slate-800 ${
                individualSkill.stack
                    ? "border-pink-300 hover:border-pink-400 dark:border-pink-300 dark:hover:border-pink-400 dark:hover:shadow-pink-400"
                    : "commonBordering"
            }`}
        >
            <div className="group-hover:grayscale-100 relative mx-auto h-6 w-6 opacity-100 grayscale-0 group-hover:opacity-20 xs:h-10 xs:w-10">
                <Image
                    src={urlFor(individualSkill?.image).url()}
                    alt={individualSkill.title}
                    objectFit="contain"
                    layout="fill"
                />
            </div>
            <p className="pointer-events-none absolute -left-0 -bottom-6  mx-auto w-full justify-center text-center text-sm opacity-0 transition group-hover:opacity-100">
                {individualSkill.title}
            </p>
        </div>
    )
}

export default IndividualSkill
