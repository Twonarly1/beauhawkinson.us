import React, { useState } from "react"
import { Skill } from "typings"
import { Heading } from "src/components/core"
import IndividualSkill from "./IndividualSkill"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}
type Props = {
    skills: Skill[]
}

const SkillsSection = ({ skills }: Props) => {
    const [enabled, setEnabled] = useState(true)

    const handleToggle = () => {
        if (enabled) {
            setEnabled(false)
        } else {
            setEnabled(true)
        }
    }

    return (
        <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-start px-6 pt-32">
            <Heading
                title={"Skills"}
                subtitle={enabled ? "Preferred stack" : "Tools I have experinece with."}
            />
            <button
                onClick={handleToggle}
                className={classNames(
                    enabled ? "bg-pink-100" : "bg-gray-200",
                    "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        enabled ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-400"
                    )}
                />
            </button>

            <div className="z-10 mt-12 grid grid-cols-4  gap-4  gap-y-6 transition-transform  duration-500  dark:bg-primary-dark sm:grid-cols-6">
                {skills
                    .map((skill, i: number) => {
                        if (skill.stack)
                            return (
                                <IndividualSkill
                                    enabled={enabled}
                                    key={i}
                                    individualSkill={skill}
                                />
                            )
                    })
                    .concat(
                        skills.map((skill: Skill, i: number) => {
                            if (!skill.stack)
                                return (
                                    <IndividualSkill
                                        enabled={enabled}
                                        key={i}
                                        individualSkill={skill}
                                    />
                                )
                        })
                    )}
            </div>
        </div>
    )
}

export default SkillsSection
