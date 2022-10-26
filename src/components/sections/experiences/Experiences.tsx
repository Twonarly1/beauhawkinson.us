import React from "react"
import { Heading } from "src/components/core"
import { Experience } from "typings"
import Case from "./Case"

type Props = {
    experiences: Experience[]
}

const Experiences = ({ experiences }: Props) => {
    return (
        <div className="relative mx-auto min-h-screen max-w-2xl flex-col items-center justify-center px-10 py-32 text-center">
            <Heading title={"Experience"} subtitle={"Official contributions and previous work."} />

            <div className="relative  z-0 -mt-6 flex w-full snap-x snap-mandatory gap-12 overflow-x-scroll scrollbar-thin overflow-y-hidden scrollbar-thumb-gray-300">
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
    )
}

export default Experiences
