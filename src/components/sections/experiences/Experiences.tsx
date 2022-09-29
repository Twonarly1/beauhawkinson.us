import React from "react"
import { Experience } from "../../../../typings"
import Heading from "../../Heading"
import Case from "./Case"

type Props = {
    experiences: Experience[]
}

const Experiences = ({ experiences }: Props) => {
    return (
        <div className="relative mx-auto min-h-screen max-w-2xl flex-col items-center justify-center px-10 pt-32 text-center">
            <Heading title={"Experience"} subtitle={"Official contributions and previous work."} />
            <div className="relative flex w-full justify-between">
                <div className="blobAnimation top-44  bg-purple-400 dark:bg-purple-200"></div>
                <div className="animation-delay-2000 blobAnimation top-48 right-0 bg-yellow-400 dark:bg-yellow-200"></div>
                <div className="animation-delay-4000  blobAnimation top-0 left-28 justify-center bg-pink-400 dark:bg-red-200"></div>
                <div className="relative z-20 -mt-6 flex w-full snap-x snap-mandatory gap-12 overflow-x-scroll scrollbar-thin overflow-y-hidden scrollbar-thumb-gray-300">
                    {experiences
                        .map((experience, i: number) => {
                            if (experience.company.includes("Muse")) {
                                return <Case experience={experience} key={i} />
                            }
                        })
                        .concat(
                            experiences.map((experience, i: number) => {
                                if (experience.company.includes("Bend")) {
                                    return <Case experience={experience} key={i} />
                                }
                            })
                        )}
                </div>
            </div>
        </div>
    )
}

export default Experiences
