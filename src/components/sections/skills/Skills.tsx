import React from "react"
import { Skill } from "../../../../typings"
import Heading from "../../Heading"
import IndividualSkill from "./IndividualSkill"

type Props = {
    skills: Skill[]
}

const SkillsSection = ({ skills }: Props) => {
    return (
        <div className="relative mx-auto flex h-screen w-full max-w-5xl flex-col items-center justify-start px-6 pt-32">
            <Heading
                title={"Skills"}
                subtitle={" Tools I have experinece with."}
                other={"* preferred stack"}
            />
            <div className="relative w-full max-w-lg">
                <div className="blobAnimation top-32 -left-4 bg-purple-300 dark:bg-purple-200"></div>
                <div className="animation-delay-2000 blobAnimation top-32 -right-4 bg-yellow-300 dark:bg-yellow-200"></div>
                <div className="animation-delay-4000 blobAnimation top-48 left-20 bg-pink-300 dark:bg-red-200"></div>
                <div className="relative  z-10 space-y-4">
                    <div className="mx-auto mt-12 grid max-w-xs grid-cols-3 gap-2 transition-transform  duration-500 xs:gap-6 2xs:max-w-md 2xs:grid-cols-4 ">
                        {skills
                            .map((skill, i: number) => {
                                if (skill.stack)
                                    return <IndividualSkill key={i} individualSkill={skill} />
                            })
                            .concat(
                                skills.map((skill: Skill, i: number) => {
                                    if (!skill.stack)
                                        return <IndividualSkill key={i} individualSkill={skill} />
                                })
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
