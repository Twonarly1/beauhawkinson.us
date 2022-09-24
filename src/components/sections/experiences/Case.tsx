/* eslint-disable @next/next/no-img-element */
import React from "react"
import { urlFor } from "../../../../sanity"
import { Experience, Technology } from "../../../../typings"

type Props = {
    experience: Experience
    index: number
    length: number
}

const Case = ({ experience, index, length }: Props) => {
    return (
        <div className="relative mb-6  flex w-full flex-shrink-0 snap-center flex-col items-center justify-center  2xs:px-12  ">
            <img
                src={urlFor(experience?.companyImage).url()}
                alt=""
                className="mb-6 h-32 w-32 rounded-full"
            />
            <div className=" max-w-6xl space-y-2  px-0">
                <h4 className="text-center text-4xl font-semibold">{experience.company}</h4>
                <h4 className="text-center text-2xl  font-semibold text-gray-900 dark:text-gray-100">
                    {experience.jobTitle}
                </h4>
                <div className="flex items-center justify-center space-x-2 p-4">
                    {experience?.technologies.map((technology: Technology, i: number) => (
                        <img
                            className="h-8 w-8"
                            key={i}
                            src={urlFor(technology.image).url()}
                            alt=""
                        />
                    ))}
                </div>
                <div className="scrollbar-thumb:pink-100 mx-auto h-60 w-full overflow-y-scroll scrollbar-hide">
                    <p className="space-y-2 text-left text-lg 2xs:px-12">
                        {experience.points.map((point, i: number) => (
                            <li key={i}>{point}</li>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Case
