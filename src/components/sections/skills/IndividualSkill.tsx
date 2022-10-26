import React from "react"
import { urlFor } from "sanity"
import Image from "next/image"
import { Skill } from "typings"

type Props = {
    individualSkill: Skill
    enabled: boolean
}

const IndividualSkill = ({ individualSkill, enabled }: Props) => {
    return (
        <div
            className={` group relative mx-auto p-[5px]  ${
                enabled && !individualSkill.stack && "opacity-20 grayscale"
            }`}
        >
            <div className=" relative mx-auto h-14 w-14 ">
                <Image
                    src={urlFor(individualSkill?.image).url()}
                    alt={individualSkill.title}
                    objectFit="contain"
                    layout="fill"
                    className="flex-shrink-0"
                />
            </div>
            <p className="pointer-events-none absolute -left-0 -bottom-6  mx-auto w-full justify-center text-center text-sm opacity-0 transition group-hover:opacity-100">
                {individualSkill.title}
            </p>
        </div>
    )
}

export default IndividualSkill
